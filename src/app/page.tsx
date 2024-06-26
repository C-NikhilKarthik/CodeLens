import React from 'react';
import { Button } from '@/components/ui/button';
import { Nav, NavLink } from "@/components/Nav";
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import vscodeImage from "../_images/vscode.jpg"
import Footer from '@/components/Footer';
const Home: React.FC = () => {
  return (
    <div>
      <Nav>
        <span className='text-1xl'>CodeLens</span>
        <div className='flex-1'></div>
        <NavLink href="/"><div className='py-1 text-sm font-light'>About</div></NavLink>
        <NavLink href="/login"><Button className='bg-black h-8 hover:bg-black hover:outline hover:outline-1'><span className='text-sm font-light'>Sign in</span></Button></NavLink>
        <NavLink href="/register"><Button className='bg-white text-black h-8 hover:bg-gray-200 text-sm'><span className='text-sm font-light'>Sign up</span></Button></NavLink>
      </Nav>

      <div className="flex items-center justify-center min-h-screen">

        <div className="text-center pt-20 pb-20">
          <h1 className="text-1xl font-light mb-8 text-white">Analyse any code with ease</h1>
          <h1 className="text-2xl font-bold mb-8 text-white">Unlock deeper insights into your code's functionality</h1>
          <div className='flex justify-center'>
            <div className="flex w-full max-w-sm items-center space-x-2 p-2">
              <Input className="bg-gray-800 h-8 border-none text-white" type="url" placeholder="Enter GitHub Link" />
              <Button className='bg-white text-black h-8  hover:bg-gray-200 text-sm' type="submit">Search</Button>
            </div>
          </div>
          <div className="flex justify-center p-20">
            <Image src={vscodeImage} className="rounded-xl" alt="code" />
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
};

export default Home;
