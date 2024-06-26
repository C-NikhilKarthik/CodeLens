import React from "react";
import { Button } from "@/components/ui/button";
import { Nav, NavLink } from "@/components/Nav";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Nav>
        <span className="text-xl font-semibold">CodeLens</span>
        <div className="flex-1"></div>
        <NavLink href="/">
          <div className="py-1 text-sm font-light">About</div>
        </NavLink>
        <NavLink href="/login">
          <Button className="h-8 hover:outline bg-transparent hover:bg-transparent hover:outline-1">
            <span className="text-sm font-light">Sign in</span>
          </Button>
        </NavLink>
        <NavLink href="/register">
          <Button className="bg-color8 h-8 hover:bg-color7 hover:px-6 transition-all duration-300 text-sm">
            <span className="text-sm font-light text-color1">Sign up</span>
          </Button>
        </NavLink>
      </Nav>
      <div className="flex flex-col justify-center items-center h-screen p-3">
        <div className="text-center flex flex-col items-center justify-center -top-16 relative">
          <h1 className="text-[clamp(20px,4dvw,28px)] font-light text-white">
            Analyse any code with ease
          </h1>
          <h1 className="text-[clamp(28px,4dvw,44px)] font-bold mb-8 text-white">
            Unlock deeper insights into your code&apos;s functionality
          </h1>
          <div className="flex justify-center w-full">
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
        </div>
      </div>

      <div className="flex justify-center relative -top-60 2xl:-top-96 px-4">
        <Image
          src={"/Landing.png"}
          className="rounded-lg w-full h-auto max-w-[1200px]"
          width={0}
          height={0}
          sizes="100%"
          alt="code"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
