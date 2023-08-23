import React from "react";
import Title from "../Title";
import { UserProfile } from "@clerk/nextjs";

const ManageAccount = () => {
  return (
    <div className="space-y-5">
      <Title>Manage your account</Title>

      <UserProfile
        appearance={{
          baseTheme: undefined,
          layout: {},
          variables: {
            borderRadius: "4px",
            colorPrimary: "#000",
          },
          elements: {
            rootBox: "w-full",
            headerTitle: "hidden ",
            headerSubtitle: "hidden",
            card: "shadow w-full rounded-lg border bg-card text-card-foreground",
            navbar: "hidden",
            navbarMobileMenuButton: "hidden",
            pageScrollBox: "py-0 pb-10",
          },
        }}
      />
    </div>
  );
};

export default ManageAccount;
