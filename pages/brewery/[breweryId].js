import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Nav from "../../components/nav";

// pages/[breweryId].js
const Brewery = ({ brewery }) => {
  console.log("In [breweryId].js");
  return (
    <>
      <Nav />
      <div>{brewery.name}</div>
      <div>{brewery.description}</div>
      <div>
        <ul>
          {brewery.beers.map(beer => (
            <li key={beer.id}>
              <Link href="/beer/[beerId]" as={`/beer/${beer.id}`}>
                <a>{beer.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
