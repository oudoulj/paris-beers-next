import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

// pages/[breweryId].js
const Brewery = ({ brewery }) => {
  console.log("In [breweryId].js");
  return (
    <>
      <div>Hello {brewery.name}</div>
      <div>{brewery.description}</div>
    </>
  );
};

Brewery.getInitialProps = async ({ query }) => {
  //console.log("query", query);
  const breweryId = query.breweryId;
  //console.log("Brewery.getInitialProps json", breweryId);
  const res = await fetch(`https://paris-brewery-api.herokuapp.com/brewery/${breweryId}`);
  const json = await res.json();
  //console.log("Brewery.getInitialProps json", json);
  return { brewery: json };
};

export default Brewery;
