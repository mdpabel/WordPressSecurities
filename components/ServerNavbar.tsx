import { cookies, headers } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@/stores/user";
import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

import Navbar from "./Navbar";

const getSession = async (cookie: string) => {
  const response = await fetch("http://localhost:3000/api/auth/session", {
    headers: {
      cookie,
    },
    cache: "no-cache",
  });
  const session = await response.json();

  return session;
};

const ServerNavbar = async () => {
  // const supabase = createServerComponentClient({
  //   cookies,
  // });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  const session = await getSession(headers().get("cookie") ?? "");

  console.log(session);

  // if (session) {
  //   useUser.setState({
  //     email: session?.user?.email,
  //     isLoggedIn: true,
  //     userId: session?.user?.id,
  //   });
  // }

  return <Navbar />;
};

export default ServerNavbar;
