import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  console.log("GET");

  if (path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      method: "GET",
    });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  console.log("POST");

  if (path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      method: "POST",
    });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}

export async function PUT(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  console.log("PUT");

  if (path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      method: "PUT",
    });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
