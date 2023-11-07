import React from "react";
import "./style.css";

function StampsView() {
  return (
    <div>
      <div className='stamp-row'>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1870_George_Washington.jpg' />
          <p className='description'>
            1870 3 cent George Washington <br /> UNHVF $146.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1894_Postage_Due.jpg' />
          <p className='description'>
            1894 1 cent postage due <br /> MNHXF $700
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1921_George_Washington.jpg' />
          <p className='description'>
            {" "}
            1921 George Washing block of 2
            <br /> UNHXF $70,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1923_George_Washington.jpg' />
          <p className='description'>
            1923 2 cent George Washington two sides imperforated
            <br /> UNHVF $2,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
      <div className='stamp-row-1'>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1923_Canal_Zone.jpg' />
          <p className='description'>
            1923 4 cent Canal Zone Biplane
            <br /> UNHVF $37.50
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1932_George_Washington.jpg' />
          <p className='description'>
            1932 3 cent George Washington imperforated on two sides <br />{" "}
            UNHVf/XF $3,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1945_Iwo_Jima.jpg' />
          <p className='description'>
            1945 3 cent Iwo Jima block of 4
            <br /> MNHXFOG $600
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1884_Russian_Coat_of_Arms_3.5.jpg' />
          <p className='description'>
            1884 Russian coat of arms 3.5 kopeks
            <br /> MNHSUOG $90,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
      <div className='stamp-row-2'>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1884_Russian_Coat_of_Arms_7.jpg' />
          <p className='description'>
            1884 Russian coat of arms 7 kopeks
            <br /> MNHSUOG $36,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1889_Coat_of_Arms_20.jpg' />
          <p className='description'>
            1889 Russian coat of arms 20 kopeks
            <br /> MNHXFOG $450
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1889_Coat_of_Arms.jpg' />
          <p className='description'>
            1889 Russian coat of arms 50 kopeks
            <br /> MNHXFOG $450
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1908_Coat_of_Arms.jpg' />
          <p className='description'>
            1908 Russian coat of arms 10 kopeks
            <br /> MNHSUOG $3,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
}

export default StampsView;
