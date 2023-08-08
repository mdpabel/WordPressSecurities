// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { stripe } from "@/utils/stripe";

// export const GET = async (req: NextRequest, context: any) => {
//   try {
//     const { params } = context;
//     const supabase = createRouteHandlerClient<Database>({ cookies });

//     const { data: profile } = await supabase
//       .from("profile")
//       .select("*")
//       .single();

//     if (!profile) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Unauthorized",
//         },
//         {
//           status: 401,
//         }
//       );
//     }

//     const checkoutSession = await stripe.checkout.sessions.create({
//       success_url: process.env.SITE_URL + "/payment-status?status=success",
//       cancel_url: process.env.SITE_URL + "/payment-status?status=cancel",
//       payment_method_types: ["card"],
//       mode: "subscription",
//       customer: profile?.stripe_customer as string,
//       line_items: [
//         {
//           price: params.priceId,
//           quantity: 1,
//         },
//       ],
//     });

//     return NextResponse.json({
//       success: true,
//       sessionId: checkoutSession.id,
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         status: false,
//         message: "Something went wrong",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// };
