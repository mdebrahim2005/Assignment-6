import React, { use } from 'react';
import Cardsc from './Cardsc';

const Card = ({carddatapromis}) => {
    const cards =use(carddatapromis)
    console.log(cards)
    return (
        <div> 
            <div> 
                {
                    cards?.map((card)=>{
                      return (
                        <Cardsc card={card} />
                      )
      } )
                }



            </div>
            
        </div>
    );
};

export default Card;