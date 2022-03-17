import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='p-4 bg-white'>
      <h1 className='text-center m-3'>Most Visited Places..!</h1>
      <div className='container'>
        <div className='conatiner-fluid'>
          <div className='cards__items mb-4'>
            <CardItem
              src='images/img-11.jpg'
              text='Paris is one of the most beautiful cities in the world.'
              label='Adventure'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='
              The amazing mountains make the most beautiful scenery in Switzerland.'
              label='Luxury'
            />
            <CardItem
              src='images/img-3.png'
              text='Many beaches all over the world offer the chance to see dolphins right from the shore.'
              label='Adventure'
            />
          </div>
          <div className='cards__items mb-4'>
            <CardItem
              src='images/img-4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            />
            <CardItem
              src='images/img-5.jpg'
              text="you don't have to fight with water, just share the same spirit as the water, and it will help you move."
              label='Adventure'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            />
          </div>
          <div className='cards__items mb-4'>
            <CardItem
              src='images/img-7.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lie down and let the sound of the rain soothe you'
              label='Adventure'
            />
            <CardItem
              src='images/img-10.jpg'
              text='There was nowhere to go but everywhere.'
              label='Adrenaline'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
