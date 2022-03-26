import React from 'react';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <div className='col-sm-12 col-md-4 col-lg-4 p-2 card-structure'>
        <div className='cardBody shadoe-lg'>
          <div className='cardPic' data-category={props.item.label}>
            <img
              className='cardImg position-absolute top-0 start-0 '
              src={props.item.src}
              alt="Card Logo"
            />
          </div>
          <div className='p-3 '>
            <h5 className='text-dark h5 '>{props.item.text}</h5>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default CardItem;




