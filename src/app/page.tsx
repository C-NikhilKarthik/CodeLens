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

          {/* <Button className="bg-white text-black px-4 py-3 rounded-md outline-dashed hover:bg-gray-200">
            <div className='flex flex-row items-center space-x-4'>
              <div> Log in with GitHub</div>
              <div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg></div>
            </div>
          </Button> */}
        </div>
      </div>

      <div className="flex justify-center relative -top-96 px-4">
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
