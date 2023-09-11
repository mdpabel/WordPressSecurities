import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const GET = async (request: NextRequest) => {
  return NextResponse.json({
    success: true,
  });
};

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      { message: "Missing path param" },
      { status: 400 }
    );
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

// https://wordpress.org/plugins/on-demand-revalidation/
export async function PUT(res: NextRequest) {
  const path = res.nextUrl.searchParams.get("path");
  const headersList = headers();
  const token = `Bearer ${process.env.REVALIDATE_SECRET_KEY}`;
  const authToken = headersList.get("authorization");

  if (token != authToken) {
    return NextResponse.json(
      {
        message: "Invalid token",
      },
      {
        status: 401,
      }
    );
  }

  if (!path) {
    return NextResponse.json(
      {
        message: "No paths",
      },
      {
        status: 412,
      }
    );
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
