import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";

const Home = breweries => {
  // const [breweries, setBreweries] = useState(null);
  console.log("Breweries list", breweries);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      {breweries !== null
        ? breweries.breweries.map(brewery => (
            <li key={brewery.id}>
              <Link href="/brewery/[breweryId]" as={`/brewery/${brewery.id}`}>
                <a>{brewery.name}</a>
              </Link>
            </li>
          ))
        : null}

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
      <style jsx global>{`
        body {
          background: #81c784;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async () => {
  console.log("Entering getInitialProps");
  const res = await fetch("https://paris-brewery-api.herokuapp.com/brewery/");
  const json = await res.json();
  //console.log("In getInitialProps", res.data.breweries);
  return { breweries: json };
};

export default Home;
