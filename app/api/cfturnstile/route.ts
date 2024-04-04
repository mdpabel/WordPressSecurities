import { NextRequest, NextResponse } from 'next/server';

const SECRET_KEY = process.env.CLOUDFLARE_TURNSTILE_SECRETKEY!;

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.formData();
    // Turnstile injects a token in "cf-turnstile-response".
    const token = body.get('cf-turnstile-response') as string;
    const ip = request.headers.get('CF-Connecting-IP') as string;

    // Validate the token by calling the
    // "/siteverify" API endpoint.
    let formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();
    if (outcome.success) {
      return NextResponse.json({
        success: true,
        outcome,
      });
    }

    return NextResponse.json({
      success: false,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
};
