import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function CoinsView() {
  return (
    <div>
      <div className='coin-row'>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Mercury_1942_Obverse.jpg' />
          <img alt='coin' src='./assets/Mercury_1942_Reverse.jpg' />
          <p className='description'>
            1942 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Morgan_1892_Obverse.jpg' />
          <img alt='coin' src='./assets/Morgan_1892_Reverse.jpg' />
          <p className='description'>
            1892-CC Morgan Silver Dollar
            <br /> VF-20 $185
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Morgan_1904_Obverse.jpg' />
          <img alt='coin' src='./assets/Morgan_1904_Reverse.jpg' />
          <p className='description'>
            1904-O Morgan Silver Dollar
            <br /> MS-67 $44,500
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Susan_B_Anthony.jpg' />
          <img alt='coin' src='./assets/Susan_B_Anthony_Reverse.jpg' />
          <p className='description'>
            1999 Susan B. Anthony Dollar
            <br /> PF-70 $160
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
      </div>
      <div className='coin-row-1'>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Buffalo_1936_Obverse.jpg' />
          <img alt='coin' src='./assets/Buffalo_1936_Reverse.jpg' />
          <p className='description'>
            1936 Buffalo Nickel <br /> F-15 $1.00
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Peace_1926_Obverse.jpg' />
          <img alt='coin' src='./assets/Peace_1926_Reverse.jpg' />
          <p className='description'>
            1926 Peace Dollar <br /> VF-20 $25
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Morgan_1921_Obverse.jpg' />
          <img alt='coin' src='./assets/Morgan_1921_Reverse.jpg' />
          <p className='description'>
            1921 Morgan Dollar <br /> MS-60 $45
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Eisenhower_1971_Obverse.jpg' />
          <img alt='coin' src='./assets/Eisenhower_1971_Reverse.jpg' />
          <p className='description'>
            1971 Eisenhower Dollar <br /> MS-65 $200
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
      </div>
      <div className='coin-row-2'>
        <div className='coin-column'>
          <img
            alt='coin'
            src='./assets/Eisenhower_1971_DCAM_Proof_Obverse.jpg'
          />
          <img
            alt='coin'
            src='./assets/Eisenhower_1971_DCAM_Proof_Reverse.jpg'
          />
          <p className='description'>
            1971 Eisenhower Proof Dollar Deep Cameo <br /> PR-68 $2,500
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Franklin_1960_Proof_Obverse.jpg' />
          <img alt='coin' src='./assets/Franklin_1960_Proof_Reverse.jpg' />
          <p className='description'>
            1960 Franklin Half Dollar <br /> PR-68 $150
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img
            alt='coin'
            src='./assets/JFK_1967_Silver_Half_Dollar_Obverse.jpg'
          />
          <img
            alt='coin'
            src='./assets/JFK_1967_Silver_Half_Dollar_Reverse.jpg'
          />
          <p className='description'>
            1967 Kennedy Half Dollar <br /> MS-66 $500
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/JFK_Half_Dollars.jpg' />
          <p className='description'>
            2014 50th Anniversary Kennedy Half Dollars <br /> PR-70 $150
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
      </div>
      <div className='coin-row-3'>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Liberty_2006_Obverse.jpg' />
          <img alt='coin' src='./assets/Liberty_2006_Reverse.jpg' />
          <p className='description'>
            2006 Liberty Silver Dollar <br /> PR-70 $100
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Liberty_1889_Obverse.jpg' />
          <img alt='coin' src='./assets/Liberty_1889_Reverse.jpg' />
          <p className='description'>
            1889 Liberty Nickel <br /> VG-12 $1
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Eisenhower_1978_Obverse.jpg' />
          <img alt='coin' src='./assets/Eisenhower_1978_Reverse.jpg' />
          <p className='description'>
            1978 Eisenhower Dollar <br /> PR-68 $25
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Eisenhower_1976_Obverse.jpg' />
          <img alt='coin' src='./assets/Eisenhower_1976_Reverse.jpg' />
          <p className='description'>
            1976-S Eisenhower Dollar Bicentennial <br /> MS-67 $125
          </p>
          <br />
          <Link className='purchase-link' href='/purchase-message'>
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CoinsView;
