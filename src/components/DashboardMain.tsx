"use client";
import React from "react";
import DashboardNav from "./DashboardNav";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

export default function DashboardMain() {
  const { user } = useAuth();
  return (
    <div className="flex items-center flex-col flex-1 px-4">
      <DashboardNav user={user} />
      <div className="flex flex-col mb-10 pt-36">
        <h1 className="text-5xl text-color8 font-bold">
          Hello, {user?.displayName}
        </h1>
        <h2 className="text-4xl text-color7 font-bold mt-1">
          How can I help you today?
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full max-w-md items-center space-x-2">
        <Input
          className="bg-[#e9ebed21] placeholder:text-[#7f7f7f] placeholder:text-[clamp(16px,3dwv,28px)] h-10 border-none "
          type="link"
          placeholder="Enter GitHub Link"
        />
        <Button
          className="bg-color8 text-color1 h-10 hover:bg-color7 ml-[0_!important]"
          type="submit"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
