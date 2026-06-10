import React from 'react';

const Toolsnav = () => {
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
                <button className="btn rounded-full">Products</button>
                <button className="btn rounded-full">Cart (2)</button>
               </div>



            </div>
            
        </div>
    );
};

export default Toolsnav;