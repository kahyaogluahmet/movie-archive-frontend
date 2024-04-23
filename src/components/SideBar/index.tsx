import Image from "next/image";
import Link from "next/link";
import React from "react";
import TrendMoviesSection from "./TrendMoviesSection";
import AdviceRobotSection from "./AdviceRobotSection";

function SideBar() {
  return (
    <div className="border rounded-md p-2 w-96 flex flex-col gap-4">
      <TrendMoviesSection />
      <AdviceRobotSection />
    </div>
  );
}

export default SideBar;
