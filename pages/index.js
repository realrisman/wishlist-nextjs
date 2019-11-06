import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>My Wishlist</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">My Wishlist</h1>

      <div className="row">
        <div className="card">
          <img src="https://s.catch.com.au/images/product/0025/25766/5d96f32ccba35108889336_w300.jpg" />
          <p>
            Razor X Cruiser Electric Skateboard with Wireless 2.4 GHz Remote -
            Black
          </p>
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="card">
          <img src="https://s.catch.com.au/images/product/0002/2012/58a4e4993be38264924111_w300.jpg" />
          <p>Birkenstock Arizona Unisex Regular Fit Sandals - Dark Brown</p>
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="card">
          <img src="https://s.catch.com.au/images/product/0025/25826/5d9ee68978bf0654691833_w300.jpg" />
          <p>Paws & Claws Catsby Double Platform Hideaway Tower - Cream</p>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        font-size: 14px;
        font-family: Trueno, Helvetica, Arial, sans-serif;
        font-weight: 100;
        line-height: 1.4;
        -webkit-font-smoothing: antialiased;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
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
        text-align: center;
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
      .card img {
        width: 100%;
      }
      .card p {
        margin: 20px 0 10px 0;
        font-size: 13px;
        color: #333;
      }
      .card button {
        background: #28a528;
        border-radius: 4px;
        color: #fff;
        text-transform: uppercase;
        padding: 12px;
        width: 100%;
      }
    `}</style>
  </div>
)

export default Home
