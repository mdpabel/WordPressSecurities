import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const formData = new FormData();
  formData.append('secret', process.env.CLOUDFLARE_TURNSTILE_SECRETKEY!);
  formData.append('response', body?.token);

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json();

  return NextResponse.json({
    success: outcome.success,
  });
};
