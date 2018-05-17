import React from 'react';
import HomeIndexItem from './home_index_item';
import HomeMap from '../home_map/home_map';

const HomeIndex = (props) => {
  // debugger
  return(
          <div>

            <h1>Homes: </h1>
            {props.homes.map(home => (
              <HomeIndexItem home={home} key={home.id}/>
            ))}
          </div>
        );};

export default HomeIndex;
