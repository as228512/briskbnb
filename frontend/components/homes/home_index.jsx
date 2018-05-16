import React from 'react';
import HomeIndexItem from './home_index_item';

const HomeIndex = ({ homes }) => (
  <div>
    <h1>Homes: </h1>
    {homes.map(home => (
      <HomeIndexItem
        home={home}
        key={home.id}
        />
    ))}
  </div>
);

export default HomeIndex;
