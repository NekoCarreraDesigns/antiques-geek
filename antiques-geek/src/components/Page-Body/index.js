import React from "react";
import "./style.css";

function PageBody() {
  return (
    <div>
      <section>
        <p className='title-page-paragraph'>
          {" "}
          Hello, and welcome to The Antique Geek, a page dedicated to the arts
          of Philately(stamps), Numisma(coins), and showcasing antiques from
          around the world. Some of the antiques here are passed down to me,
          others are ones I have picked up on my own. The stamps that are
          featured on this page were my grandfather's. The coins were my dad's
          and some of mine that I've found over the years.
        </p>
      </section>
      <section>
        <p className='title-page-paragraph'>
          The grades and descriptions of the stamps and coin are based off the
          Scott Stamp Catalogue, and Whitman Blue Book, as well as the PCGS
          grading site, and national philatelic society grading guidelines, it
          is my desire to have the finest products available to you. stamps in
          sets cannot be broken up, the full set must be purchased
        </p>
        <p className='title-page-paragraph'>
          The antiques have been vetted by the lovely folks at the antiques
          corner in Denver, as well as my own research, they are passed down
          from my paternal grandparents, taken care of and used lovingly, you
          will find them in excellent condition for how old they are. have a
          look around on each of the pages, see something that peeks your
          interest don't hesitate to reach out. While this may look like an
          e-commerce site, you can't purchase anything from this page, you will
          be given my contact info, and using one of the means I've given you we
          will proceed from there. 
        </p>
      </section>
    </div>
  );
}

export default PageBody;
