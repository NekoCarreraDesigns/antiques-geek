import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className='page-navbar'>
        <Link className='page-navbar-link' href='/coins'>
          Numisma
        </Link>
        {"   "}
        <Link className='page-navbar-link' href='/stamps'>
          Philately
        </Link>
        {"   "}
        <Link className='page-navbar-link' href='/antiques'>
          Antiques
        </Link>
        {"   "}
        <br />
        <Link className='page-navbar-link' href='/coins-view'>
          Coins
        </Link>
        {"  "}
        <Link className='page-navbar-link' href='/stamps-view'>
          Stamps
        </Link>
        {"  "}
        <Link className='page-navbar-link' href='/antiques-view'>
          Pieces
        </Link>
      </nav>
      <header className='page-header'>The Antique Geek</header>
    </div>
  );
}
export default Header;
