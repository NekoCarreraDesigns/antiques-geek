import React from "react";
import "./style.css";

function AntiquesView() {
  return (
    <div>
      <div className='antiques-row'>
        <div className='antiques-column'>
          <img alt='antiques' src='./assets/Royal_Quiet_Deluxe.jpg' />
          <p className='description'>
            1947 Royal Quiet De Luxe with original case $200
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='antiques-column'>
          <img alt='antiques' src='./assets/Eterna_Las_Palmas.jpg' />
          <p className='description'>
            Las Palmas gold plated Silverware service of eight, plus serving
            utensils $500
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='antiques-column'>
          <img alt='antiques' src='./assets/Gorham_Lyric.jpg' />
          <p className='description'>
            1940 Gorham Silverware service of six plus 12 teaspoons $1,250
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='antiques-column'>
          <img alt='antiques' src='./assets/Land_Camera.jpg' />
          <p className='description'>1952 Polaroid Land Camera $2,000</p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
}

export default AntiquesView;
