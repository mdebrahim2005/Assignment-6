import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({selectedProducts}) => {
    return (
        <div>
 <div className="navbar   bg-base-100 shadow-sm container mx-auto flex justify-between ">
  <div className="">
    <h1 className="  text-4xl py-5 font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer ">DigiTools</h1>
  </div>  
  <div className=' flex justify-center'> 
    <ul className='hidden md:flex gap-7'>
             <li className='font-bold' >Products</li>
             <li className='font-bold' >Features</li>
             <li className='font-bold' >Pricing</li>
             <li className='font-bold' >Testimonials</li>
             <li className='font-bold' >FAQ</li>
  </ul>

  </div>


       <div className='flex items-center gap-2'>
        <CiShoppingCart className='w-7 h-7' />
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {selectedProducts.length}
                    </span>
        <button className="mx-3">Login</button>
        <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-2 px-4 rounded-full  hover:from-[#8d03f6] hover:to-[#290fef]">
            Get Started</button>                                                                                                                            

     </div>
</div>
        </div>
    );
};

export default Navbar;