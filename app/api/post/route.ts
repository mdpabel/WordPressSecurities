import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const POST = async (req: NextRequest) => {
  const r = await req.json();

  console.log(r, headers);

  await revalidatePath("/guides");

  return NextResponse.json({
    success: true,
    req: r,
    headers,
  });
};
