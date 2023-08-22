import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({});
};

export const DELETE = async () => {
  try {
    const customers = await stripe.customers.list({ limit: 100 }); // You might need to paginate if you have more than 100 customers
    console.log(customers.data); // Display the retrieved customer data

    // Loop through customers and delete each one
    for (const customer of customers.data) {
      await stripe.customers.del(customer.id);
      console.log(`Deleted customer: ${customer.id}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return NextResponse.json({});
};
