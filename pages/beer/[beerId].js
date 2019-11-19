import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Nav from "../../components/nav";

// pages/[beerId].js
const Beer = ({ beer }) => {
  console.log("In [beerId].js");
  return (
    <>
      <Nav />
      <div className="title">{beer.name}</div>
      <div>{beer.description}</div>
      Brassée par:{" "}
      <Link href="/brewery/[breweryId]" as={`/brewery/${beer.brewery.id}`}>
        <a>{`${beer.brewery.name}`}</a>
      </Link>
      <div>Alcool :{beer.alcool}%</div>
      <style jsx>
        {`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 36px;
          }
        `}
      </style>
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
