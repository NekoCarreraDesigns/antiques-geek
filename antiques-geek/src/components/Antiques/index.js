import React from "react";
import "./style.css";

function Antiques() {
  return (
    <div>
      <header className='antiques-header'>Antiques</header>
      <p className='antiques-paragraph'>
        Welcome to the antiques page, what is antique you ask? An antique is
        anything that is over 50 years old, currently anything made in 1972 is
        considered an antique. Like stamps and coins, antiques hold historical
        value, each one represents a different place and time, some of them even
        represent different eras, like victorian, or elizabethan era antiques.{" "}
      </p>
      <p className='antiques-paragraph'>
        Anything can be antique, as long as its over 50 years old. the most
        common antiques are glassware, silverware, furniture, machinery such as
        sewing machines, typewriters, and many more. I will feature four pieces
        each month. The ones I currently own have been passed down to me by my
        grandparents.
      </p>
      <p className='antiques-paragraph'>
        Antiques don't usually carry any kind of grading system like coins and
        stamps, they are identified by manufacturer, any marks relating to the
        manufacturer, serial numbers, and can vary in price according to rarity.
        For example something made in the early 1900's is going to be higher in
        price because of its age, and how many were made, lets say for example
        sake a manufacturer made 400,000 pieces of silverware in 1901. these
        pieces are going to be more rare because of the amount produced and the
        year they were made. Something that was made in 1960 by the same
        manufacturer, only this time they made 4,000,000 pieces is going to be
        less rare, still valuable because of the metal that its made from, but
        as far as being unique it's not, because there are 4 million of them.
        the number of 1901 pieces goes down significantly depending on who kept
        them, or if people melted them down, the 400,000 could end up being
        100,000 in 2022 or even lower
      </p>
      <a className='antiques-view-link' href='/antiques-view'>
        View Antiques
      </a>
    </div>
  );
}

export default Antiques;
