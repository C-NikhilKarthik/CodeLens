import React from "react";
import { Button } from "@/components/ui/button";
import { Nav, NavLink } from "@/components/Nav";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Content, Working } from "@/data/Home";

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
        <div className="text-center flex max-w-4xl flex-col items-center justify-center -top-16 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-bold mb-4 leading-[1.1] text-white">
            Effortlessly Analyze and Document Any Codebase
          </h1>
          <h1 className="text-lg mb-8 max-w-3xl mx-auto text-color7">
            Generate comprehensive insights and automated documentation to
            streamline your development process
          </h1>
          <div className="flex justify-center items-center gap-4 w-full">
            {/* <div className="flex flex-col md:flex-row gap-2 w-full max-w-md items-center space-x-2">
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
            </div> */}
            <Link
              className="rounded bg-color8 text-color1 hover:bg-color7 transition-all hover:px-8 px-6 h-12 flex items-center"
              href="/dashboard"
            >
              Get Started
            </Link>
            <button
              type="button"
              className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 rounded bg-color3 ring-0 text-slate-300 shadow-[inset_1px_1px_0_0_#ffffff0d] hover:bg-color4"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-none text-slate-300 dark:text-slate-400"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
              <span className="flex-auto">Quick search...</span>
              <kbd className="font-sans font-semibold dark:text-slate-500">
                <abbr
                  title="Control"
                  className="no-underline text-slate-300 dark:text-slate-500"
                >
                  Ctrl
                </abbr>
                K
              </kbd>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative -top-10 md:-top-60 2xl:-top-72 px-4">
        <Image
          src={"/Landing.png"}
          className="rounded-lg w-full h-auto max-w-[1200px]"
          width={0}
          height={0}
          sizes="100%"
          alt="code"
        />
      </div>

      <section className="font-clash bg-color2 py-20 text-color8">
        <div className="max-w-5xl mx-auto text-2xl text-center font-semibold px-4">
          Many repositories suffer from a lack of proper documentation and setup
          instructions, leading to confusion and increased setup time for
          developers. This often results in reduced usability and
          maintainability of the code.
        </div>
        <div className="max-w-5xl mx-auto text-center text-lg mt-10 text-color7 px-4">
          Our Code Analyzer addresses this problem by automating the creation of
          README and setup files. It ensures that every project has clear,
          concise, and up-to-date documentation, making it easier for developers
          to get started and contribute.
        </div>
      </section>

      <section className="mt-20 font-clash w-full mx-auto mb-20">
        <h1 className="text-color8 pl-4 md:pl-8 lg:pl-10 xl:pl-16 mb-10 font-bold text-[clamp(24px,3dvw,32px)]">
          What we do?
        </h1>
        <div className="w-full px-4 overflow-hidden">
          <div className="infinite-scroll-wrapper">
            <div className="infinite-scroll">
              {Content?.map((item, index) => (
                <div
                  key={index}
                  className="bg-color3 w-96 flex-none p-4 rounded shadow-[inset_1px_1px_0_0_#ffffff0d] flex flex-col gap-2"
                >
                  <h1 className="text-color8 font-bold text-xl mb-6">
                    {item?.heading}
                  </h1>
                  <h2 className="text-color7">{item?.subHeading}</h2>
                </div>
              ))}
              {Content?.map((item, index) => (
                <div
                  key={index}
                  className="bg-color3 w-96 flex-none p-4 rounded shadow-[inset_1px_1px_0_0_#ffffff0d] flex flex-col gap-2"
                >
                  <h1 className="text-color8 font-bold text-xl mb-6">
                    {item?.heading}
                  </h1>
                  <h2 className="text-color7">{item?.subHeading}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] mt-20 font-clash w-full mx-auto mb-20 px-4">
        <h1 className="text-color8 font-bold text-[clamp(24px,3dvw,32px)]">
          How it works?
        </h1>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-3 mt-10">
          {Working?.map((item, index) => (
            <div
              key={index}
              className="bg-color3 p-4 rounded shadow-[inset_1px_1px_0_0_#ffffff0d] flex flex-col gap-2"
            >
              <h1 className="text-color8 text-xl mb-6">{item?.heading}</h1>
              <h2 className="text-color7">{item?.subHeading}</h2>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
