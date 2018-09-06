import React from 'react';
import './Categories.css';

const Categories = (props) => {
  return (
    <section className='Categories'>
      {props.categories.map((category, index) => {
        return <div className='Categories__item' key={index}>{category}</div>
      })}
    </section>
  );
}

export default Categories;