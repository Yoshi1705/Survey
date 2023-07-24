// ThankYouPage.js
import React from 'react';
import img from './img.jpg';
import './thanq.css';

const ThankYouPage = () => {
  return (
    <div className='container'>
      
      <img src = {img}/>
      <br/><br/>
      <h2>Thank You❤️</h2>
      <br/>
      <h4>Your submission has been received</h4>
      
    </div>
  );
};

export default ThankYouPage;
