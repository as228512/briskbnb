import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './greeting_search';
import Autocomplete from 'react-google-autocomplete';

const greetingText = () => {
  return (
    <div className="greeting-background-image">
      <h1 className="splash-text">Book unique homes in cool climates</h1>
      <h1 className="splash-2-text">the world over.</h1>
      <SearchBar className="search-bar-container"/>
    </div>
  );
};

export default greetingText;
