import React from 'react';
import List from './List';

const Cardsc = ({card, }) => {
    return (
        <div> 
            <div className=' '>
                <div className="card  hover-3d w-full bg-base-100 shadow-sm ">
  <div className="card-body">
    <div className='flex justify-between'>  
        <img src={card.img} className='h-6 w-auto ' />
         <span className=
         {`badge badge-xs py-2 ${
    card.tag === "New"
      ? "bg-[#b0f6cd] text-[#042612]"
      : card.tag === "Popular"
      ? "bg-[#4F39F6] text-white"
      : card.tag === "Best Seller"
      ? "bg-[#f5caab] text-[#210e00]"
      : "bg-gray-300"
  }`}
         >{card.tag}</span>
    </div>
   
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">{card.name}</h2>
      <p className='text-gray-500'> {card.description}</p>
      <span className="text-xl font-bold">${card.price}</span>
    </div> 
    <List card={card} />


    <div className="mt-6">
      <button className="btn  btn-block bg-gradient-to-r from-[#4F39F6] to-[#9514FA]
       text-white font-bold py-2 px-4 rounded-full
         hover:from-[#8d03f6] hover:to-[#290fef] ">Buy Now</button>
    </div>
  </div>
</div>

            </div>
            
        </div>
    );
};

export default Cardsc;

