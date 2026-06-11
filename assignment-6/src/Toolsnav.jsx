import React, { useState } from 'react';
import Cardsc from './Cardsc';




const Toolsnav = ({selectedProducts,active,setactive,count, setcount}) => {

    // const [products , setproducts]=useState("Products")
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
                <button onClick={()=>setactive("Products")}
                 className={`btn rounded-full ${active==="Products"?"bg-[#9514FA]"
                    :"bg-white"
                 } `} >Products</button>
                <button onClick={()=>setactive("Cart")}
                 className={`btn rounded-full ${active==="Cart"?"bg-[#9514FA]"
                    :"bg-white"
                 }`}>Cart ({selectedProducts.length || 0})</button>
               </div>



            </div>

     
           
            
        </div>
    );
};

export default Toolsnav;




  