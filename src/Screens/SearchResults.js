import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function SearchResults() {
  const search = useSelector((state) => state.search.value);
    
  return (
    <div className="App">
      <h1>Marka: {search.marka}</h1>
      <h1>Model: {search.model}</h1>
      <h1>City: {search.city}</h1>
      <h1>Min Year: {search.minyear}</h1>
      <h1>Max Year: {search.maxyear}</h1>
      <h1>Ban: {search.ban}</h1>
      <h1>Min Price: {search.minprice}</h1>
      <h1>Max Price: {search.maxprice}</h1>
      <h1>Color: {search.color}</h1>
      <h1>Owner type: {search.ownertype}</h1>

      <button onClick={() => console.log(search)}>Get results in console</button>
    </div>
  );
}

export default SearchResults;
