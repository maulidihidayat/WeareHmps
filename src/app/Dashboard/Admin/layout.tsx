import Sidebar from "@/components/Sidebar";
import image from "@/source/image";
import {
  Link,
  ArrowRight,
  LayoutDashboard,
  BarChartHorizontalBigIcon,
  ActivitySquareIcon,
  Settings,
  LogOut,
  Tally3,
  Menu,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Adminsidebar from "./Adminsidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Adminsidebar />
      {children}
    </>
  );
}
