import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div>
 <div className="navbar   bg-base-100 shadow-sm container mx-auto flex justify-between ">
  <div className="">
    <h1 className="  text-4xl py-5 font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer ">DigiTools</h1>
  </div>  
  <div className=' flex justify-center'> 
    <ul className='flex gap-7'>
             <li className='font-bold' >Products</li>
             <li className='font-bold' >Features</li>
             <li className='font-bold' >Pricing</li>
             <li className='font-bold' >Testimonials</li>
             <li className='font-bold' >FAQ</li>
  </ul>

  </div>


       <div className='flex items-center gap-2'>
        <CiShoppingCart className='w-6 h-6' />
        <button class="mx-3">Login</button>
        <button class="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-2 px-4 rounded-full  hover:from-[#8d03f6] hover:to-[#290fef]">
            Get Started</button>                                                                                                                            

     </div>
</div>
        </div>
    );
};

export default Navbar;