import React, { use } from 'react';
import Cardsc from './Cardsc';

const Card = ({carddatapromis,selectedProducts,handelselect}) => {
    const cards =use(carddatapromis)
    console.log(cards)
    return (
        <div> 
            <div className='grid grid-cols-2 lg:grid-cols-3 container mx-auto gap-10 gap-y-15'> 
                {
                    cards?.map((card)=>{
                      return (
                        <Cardsc key={card.id} card={card}
                         selectedProducts={selectedProducts}
                         handelselect={handelselect}
                        />
                      )
      } )
                }



            </div>
            
        </div>
    );
};

export default Card;