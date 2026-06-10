import React from 'react';
import user from '../assets/user.png'
import Group from '../assets/Group1.png'
import Group2 from '../assets/Group2.png'


const Just = () => {
    return (
        <div>
             <div className='py-25'>
      <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>
             Get Started in 3 Steps
            </h1>
            <p className=' text-gray-500'>
                Start using premium digital tools in minutes, not hours.
            </p>
        </div>

        <div className=' container mx-auto grid grid-cols-3 w-full  py-17 gap-8'> 
            <div className='hover-3d bg-base-100 shadow-sm flex flex-col items-center gap-3'>
                <img src={user}  className='bg-[#f4e7fe] rounded-full py-4 px-4'/>
                <h1 className='text-xl font-bold'>
              Create Account
                </h1>
                <p className='text-gray-500 text-center'>Sign up for free in seconds.  <br />No credit card required to get started.</p>

            </div>
            <div className='hover-3d bg-base-100 shadow-sm flex flex-col items-center gap-3'>
                <img src={Group} />
                <h1 className='text-xl font-bold'>
                    Choose Products

                </h1>
                <p className='text-gray-500 text-center'>Browse our catalog <br /> and select the toolsthat fit your needs.</p>

            </div>
            <div className='hover-3d bg-base-100 shadow-sm flex flex-col items-center gap-3'>
                <img src={Group2} />
                <h1 className='text-xl font-bold'>
                    Start Creating

                </h1>
                <p className='text-gray-500 text-center'>Download and start using your <br /> premium tools immediately.</p>

            </div>

        </div>
            

        </div>
       
        </div>
    );
};

export default Just;




