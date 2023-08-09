import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import {
  createRouteHandlerClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useUser } from "@/stores/user";
import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

export const GET = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({
    cookies,
  });

  const session = await supabase.auth.getSession();

  return NextResponse.json({
    session,
  });
};
