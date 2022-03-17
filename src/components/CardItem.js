import React from 'react';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <div className='cardItem m-4 card-structure '>
        <div className='cardBody shadoe-lg'>
          <div className='cardPic' data-category={props.label}>
            <img
              className='cardImg position-absolute top-0 start-0 '
              src={props.src}
              alt="Card Logo"
            />
          </div>
          <div className='p-3'>
            <h5 className='text-dark h5'>{props.text}</h5>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default CardItem;




