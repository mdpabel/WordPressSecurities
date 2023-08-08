"use client";
import Button from "@/components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

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
