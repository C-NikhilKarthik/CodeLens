import GitHubSignIn from "@/components/GitHubSignIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center text-color8 min-h-screen space-y-3">
      <span className="text-xl font-semibold">Sign in to CodeLens</span>

      <div className="flex flex-col space-y-3 bg-color2 border border-color3 p-5 rounded w-80">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="">Username</Label>
          <Input
            className="bg-color1 border-color3 border h-8"
            type="text"
            id="username"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="">Password</Label>
          <Input
            className="bg-color1 border-color3 border h-8"
            type="password"
            id="password"
          />
        </div>

        <div className="grid w-full max-w-sm items-center">
          <Button className="bg-color8 text-black h-8 hover:bg-color7 text-sm">
            Login
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-3 bg-color2 border border-color3 p-5 rounded w-80">
        <GitHubSignIn />
        <div className="flex flex-row justify-center space-x-1">
          <span className="text-xs font-light">New to CodeLens?</span>
          <span className="text-xs text-blue-800 font-light">
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Login",
};
