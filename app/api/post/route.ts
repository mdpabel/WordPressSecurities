import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const POST = async (req: NextRequest) => {
  const r = await req.json();

  console.log(r);

  await revalidatePath("/guides");

  return NextResponse.json({
    success: true,
    req: r,
  });
};
