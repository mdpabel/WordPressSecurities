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
            card: "shadow-none bg-[#f6f6f6] w-full ",
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
