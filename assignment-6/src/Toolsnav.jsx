import React, { useState } from 'react';




const Toolsnav = () => {

    const [products , setproducts]=useState("Products")
    return (
        <div> 
            <div className=' flex flex-col  items-center py-15'>
                
                 <div className=''>

             <h1 className='text-4xl font-extrabold flex justify-center '>
                      Premium Digital Tools
                </h1>
               <p className=' text-gray-500 py-4 text-center'> 
                   Choose from our curated collection of premium digital products <br/>
                    designedto boost your productivity and creativity.
               </p>
            </div>

               <div className=''>
                <button onClick={()=>setproducts("Products")}
                 className={`btn rounded-full ${products==="Products"?"bg-[#9514FA]"
                    :"bg-white"
                 } `} >Products</button>
                <button onClick={()=>setproducts("Cart")}
                 className={`btn rounded-full ${products==="Cart"?"bg-[#9514FA]"
                    :"bg-white"
                 }`}>Cart (2)</button>
               </div>



            </div>
            
        </div>
    );
};

export default Toolsnav;




  