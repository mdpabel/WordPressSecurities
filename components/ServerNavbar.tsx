// import { cookies } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useUser } from "@/stores/user";
// import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

// import Navbar from "./Navbar";

// export const dynamic = "force-dynamic";

// const ServerNavbar = async () => {
//   const supabase = createServerComponentClient({
//     cookies,
//   });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (session) {
//     useUser.setState({
//       email: session?.user?.email,
//       isLoggedIn: true,
//       userId: session?.user?.id,
//     });
//   }

//   return <Navbar />;
// };

// export default ServerNavbar;
