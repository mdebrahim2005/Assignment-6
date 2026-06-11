import React from 'react';

const Selected = ({selectedProducts,handleRemove,handleClearAll}) => {
   
    const totalprice= selectedProducts.reduce((total,items)=>{
        const price = items.price;
        return total +(price ||0)
    },0)

    return (
        <div>
             <div>
                <div>
                    {
                        selectedProducts.length===0?
                        (   <div className="text-center mt-10">
                        <h2 className="text-xl font-bold text-gray-400">No  selected yet!</h2>
                    </div>):(
                        <div>
                        <h1 className="text-2xl font-bold mb-4 container mx-auto">Your Selected Tools:</h1>
                     
                        {selectedProducts.map((item, index) => (
               
          

                   
                            <div className='bg-base-100 container mx-auto my-10 border-2 border-amber-200'>
                               <div className='flex justify-between items-center py-4'>
                                <h2 className='flex items-center gap-2 ' key={index}> <img src={item.img} />
                                     {item.name}</h2>
                           
                                                <button 
                                                    onClick={() => handleRemove(item.id)} 
                                                    className="btn btn-sm text-red-500 hover:bg-red-50"
                                                >
                                                    Remove
                                                </button>

                            </div>

                            </div>
                          
                        ))}
                         <div className='flex justify-between container mx-auto'>
                                <h1 className='text-gray-500 '>Total :</h1>
                                <h1>${totalprice.toFixed(2)}</h1>
                            </div> 
                           
                           <div className='container mx-auto'>
                            <button onClick={() =>handleClearAll() } className="btn  btn-primary w-full">Proceed to Checkout</button>
                           </div>
                          
                    </div>
                    )
                    }

                </div>
             </div>
            
        </div>
    );
};

export default Selected;