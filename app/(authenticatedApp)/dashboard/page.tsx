"use client";
import Button from "@/components/Button";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Dashboard = () => {
  const supabase = createClientComponentClient();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={() => supabase.auth.signOut()}>Logout</Button>
    </div>
  );
};

export default Dashboard;
