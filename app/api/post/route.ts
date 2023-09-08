import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const GET = async (req: NextRequest) => {
  revalidatePath("/guides");

  return NextResponse.json({
    success: true,
  });
};

export const POST = async (req: NextRequest) => {
  revalidatePath("/guides");

  return NextResponse.json({
    success: true,
  });
};
