import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className='page-navbar'>
        <Link className='page-navbar-link' to='/coins'>
          Numisma
        </Link>
        {"   "}
        <Link className='page-navbar-link' to='/stamps'>
          Philately
        </Link>
        {"   "}
        <Link className='page-navbar-link' to='/antiques'>
          Antiques
        </Link>
        {"   "}
        <br />
        <Link className='page-navbar-link' to='/coins-view'>
          Coins
        </Link>
        {"  "}
        <Link className='page-navbar-link' to='/stamps-view'>
          Stamps
        </Link>
        {"  "}
        <Link className='page-navbar-link' to='/antiques-view'>
          Pieces
        </Link>
      </nav>
      <header className='page-header'>The Antique Geek</header>
    </div>
  );
}
export default Header;
