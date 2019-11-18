import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

// pages/[beerId].js
const Beer = ({ beer }) => {
  console.log("In [beerId].js");
  return (
    <>
      <div>Hello {beer.name}</div>
      <div>{beer.description}</div>
    </>
  );
};

Beer.getInitialProps = async ({ query }) => {
  //console.log("query", query);
  const beerId = query.beerId;
  //console.log("Brewery.getInitialProps json", breweryId);
  const res = await fetch(`https://paris-brewery-api.herokuapp.com/beer/${beerId}`);
  const json = await res.json();
  //console.log("Brewery.getInitialProps json", json);
  return { beer: json };
};

export default Beer;
