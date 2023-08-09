import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import {
  createRouteHandlerClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";

export const GET = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({
    cookies,
  });

  const session = await supabase.auth.getSession();

  return NextResponse.json({
    session,
  });
};
