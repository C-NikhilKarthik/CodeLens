import React from 'react';
import { Button } from '@/components/ui/button';
import { Nav, NavLink } from "@/components/Nav";
import Image from 'next/image';
import vscodeImage from "../_images/vs_code.png";
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

        <div className="text-center pt-20">
          <h1 className="text-1xl font-light mb-8 text-white">Analyse any code with ease</h1>
          <h1 className="text-2xl font-bold mb-8 text-white">Unlock deeper insights into your code's functionality</h1>
          <div className="flex justify-center pr-20 pl-20 pt-10 pb-10">
            <Image src={vscodeImage} alt="code" />
          </div>

          {/* <Button className="bg-white text-black px-4 py-3 rounded-md outline-dashed hover:bg-gray-200">
            <div className='flex flex-row items-center space-x-4'>
              <div> Log in with GitHub</div>
              <div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg></div>
            </div>
          </Button> */}
        </div>
      </div>
    </div>

  );
};

export default Home;
