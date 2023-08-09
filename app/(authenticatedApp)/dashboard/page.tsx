"use client";
import Button from "@/components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        onClick={() => {
          supabase.auth.signOut();
          router.refresh();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
