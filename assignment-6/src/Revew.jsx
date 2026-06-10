import React from 'react';

const Revew = () => {
    return (
        <div>  
            <div className='flex justify-around bg-[#8d15e9] py-8 items-center'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-6xl font-bold text-white '>
                        50k+
                    </h1>
                    <p className='text-white'>Active Users</p>
                </div> 
                   <div className="divider divider-horizontal divider-end"></div>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-6xl font-bold text-white'>
                        200+
                    </h1>
                     <p className='text-white '>
                        Premium Tools
                     </p>
                </div>
                  <div className="divider divider-horizontal divider-end"></div>
                <div className=' flex flex-col items-center gap-2'>
                    <h1 className='text-6xl font-bold text-white'>
                        4.9
                    </h1>
                    <p className='text-white'>Rating</p>
                </div>
              
            </div>
            
        </div>
    );
};

export default Revew;