import React from 'react';
import { Link } from 'react-router';

const HomeDetail = ({ home }) => {
  return (
    <div>

      <ul className="home-list">
        <img className="index-image"
          src={"../../../app/assets/images/splash2.jpg"}/>
        <li>{home.title}</li>
        <li>{home.price}</li>
        <li>{home.description}</li>
        <li>Rating: { null ||
             'No reviews to be seen... be the frist to leave one!'}</li>
        <li>Description: {home.description}</li>
      </ul>

      <br/>

      <div className='reviews'>
        <h3>Reviews</h3>
        <p>review1</p>
        <p>review2</p>
        <p>review3</p>
      </div>
    </div>
  );
};

export default HomeDetail;
