import { NextRequest, NextResponse } from 'next/server';
import type { WebhookEvent } from '@clerk/clerk-sdk-node';
import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { clerkClient, currentUser } from '@clerk/nextjs';
import { generateToken } from '@/app/(unAuthenticatedApp)/_actions';
import { login, logout } from '@/swell/account';
import swell from '@/swell/server';
import swellClient from '@/swell/client';

export const GET = async () => {
  const user = await currentUser();

  return NextResponse.json({
    success: true,
    user,
  });
};

const signingKey = process.env.CLERK_WEBHOOK_SIGNING_SECRET!;

export const POST = async (req: NextRequest) => {
  const payload = await req.json();
  const headerLists = headers();

  const svixId = headerLists.get('svix-id');
  const svixSignature = headerLists.get('svix-signature');
  const svixTimestamp = headerLists.get('svix-timestamp');
  const webhook = new Webhook(signingKey);

  if (!svixId || !svixSignature || !svixTimestamp || !webhook) {
    return NextResponse.json({
      success: false,
      message:
        'Invalid request. Required headers (svix-id, svix-signature, svix-timestamp) or webhook are missing.',
    });
  }

  const event = webhook?.verify(JSON.stringify(payload), {
    'svix-id': svixId,
    'svix-signature': svixSignature,
    'svix-timestamp': svixTimestamp,
  }) as unknown as WebhookEvent;

  try {
    if (event.type === 'user.created') {
      const email = event.data.email_addresses[0]?.email_address;
      const firstName = event.data.first_name;
      const lastName = event.data.last_name;

      await swellClient.account.create({
        email: email,
        first_name: firstName,
        last_name: lastName,
        email_optin: true,
      });
    } else if (event.type === 'session.created') {
      const userId = event?.data?.user_id;

      const user = await clerkClient.users.getUser(userId);

      if (!user) {
        return NextResponse.json({
          success: false,
          message: 'No user found!',
        });
      }

      const primaryEmailAddressId = user?.primaryEmailAddressId;
      const userPrimaryEmail = user?.emailAddresses.find(
        (email) => email.id === primaryEmailAddressId,
      );
      const email = userPrimaryEmail?.emailAddress as string;

      const { password_token } = await swell.put(`/accounts/${email}`, {
        password_token: null,
      });

      await login(email, password_token);
    } else if (event.type === 'user.deleted') {
      await logout();
    } else if (event.type === 'session.removed') {
      await logout();
    } else if (event.type === 'session.ended') {
      await logout();
    } else {
      console.log(event, 'default');
      return NextResponse.json({
        success: false,
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
};
