import React from 'react';
import banner from './assets/banner.png'
import Group from './assets/Group.png'
import Play from './assets/Play.png'

const Banner = () => {
    return (
        <div>  

            <div className="hero container mx-auto   mt-15">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img
      src={banner}
      className=" rounded-lg shadow-xl"
    />
    <div className=''> 
        <button className='mb-5 flex items-center text-[#8272fe] bg-[#E1E7FF] py-3 px-2 rounded-full'>
            {/* <img src= {Group.png} className='' /> */}
                  New: AI-Powered Tools Available 
        </button>
      <h1 className="text-7xl font-bold leading-20">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-gray-400">
       Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.Explore Products 

      </p>
        <div className='flex items-center  gap-5 '>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-2 px-4 rounded-full  hover:from-[#8d03f6] hover:to-[#290fef]">
           Explore Products</button>  
           <button className="btn btn-outline btn-primary rounded-full">
            <img src={Play}   />
            Watch Demo</button> 
    </div>

      
    </div>
   
  </div> 

</div>

            
        </div>
    );
};

export default Banner;