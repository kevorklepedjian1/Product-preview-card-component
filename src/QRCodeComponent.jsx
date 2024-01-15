import React from 'react';

import ProductImageDesktop from './images/image-product-desktop.jpg';
import ProductImageMobile from './images/image-product-mobile.jpg';
import CartIcon from './images/icon-cart.svg';

const ProductImage = () => (
  <article>
    <picture>
      <source media="(min-width: 640px)" srcSet={ProductImageDesktop} />
      <img src={ProductImageMobile} alt="" />
    </picture>
  </article>
);

const ProductInfo = () => (
  <article>
    <h2>perfume</h2>
    <h1>Gabrielle Essence Eau De Parfum</h1>
    <p>
      A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.
    </p>
    <ul>
      <li className="price">$149.99</li>
      <li>
        <s>$169.99</s>
      </li>
    </ul>
    <button className="btn">
      <img src={CartIcon} alt="" /> Add to Cart
    </button>
  </article>
);

const QRCodeComponent = () => {
  return (
    <>
      <div className="container">
        <ProductImage />
        <ProductInfo />
      </div>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://kevorklepedjian.vercel.app/">Kevork Lepedjian</a>.
      </div>
    </>
  );
};

export default QRCodeComponent;
