import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
