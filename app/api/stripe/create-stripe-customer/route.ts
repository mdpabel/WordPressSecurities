import { stripe } from '@/utils/stripe';
import { supabase } from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

let data = {};

export const GET = () => {
  return NextResponse.json({
    data,
  });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const apiSecret = searchParams.get('apiSecret');

  if (apiSecret !== process.env.API_ROUTE_SECRET) {
    return NextResponse.json(
      {
        status: false,
        message: 'You are not authorized to call this api',
      },
      {
        status: 401,
      },
    );
  }

  const customer = await stripe.customers.create({
    email: body.record.email,
  });

  await supabase
    .from('profile')
    .update({
      stripe_customer: customer?.id,
    })
    .eq('id', body.record.id);

  return NextResponse.json(
    {
      success: true,
      message: 'Customer created successfully',
      error: null,
      data: '',
    },
    {
      status: 201,
    },
  );
};
