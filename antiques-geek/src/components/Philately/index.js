import React from "react";
import "./style.css";

function Philately() {
  return (
    <div>
      <header className='philately-header'>Philately</header>
      <section className='philately-section'>
        <p className='philately-paragraph'>
          Philately is the art of collecting stamps, but it is so much more than
          that. Philatelists believe that each stamp represents a piece of
          history. Which in fact it does, a stamp made during world war one, has
          a significant historical value, as well as stamps from countries that
          no longer exist, or have changed names. Places that were part of the
          vast British empire, places that were occupied during invasions by
          other countries, the stamps on this page are a mere portion of the
          worlds history, collected by my grandfather Charles Maas Sr. when he
          was a twenty-something Chicagoan in the 1920's. Having served as a
          marine in World War 2, he collected stamps from all over the pacific
          islands being stationed in Philippines, as well as Europe, and Africa,
          and both North, and South America.
        </p>
        <p className='philately-paragraph'>
          The stamps featured on this page are only a tease of the whole
          collection, since there are over 4,000 of them, listing them all would
          be tedious and painful, the ones shown are the most prized, and
          valuable, of the collection if you would like to inquire into seeing
          more of the collection upon contacting me I will gladly help you find
          what you are looking for, if I have it, or don't, I made a book of all
          the stamps with the values, and conditions, it just will not be listed
          here.
        </p>
      </section>
      <div>
        <h1 className='abbreviation-header'>Abbreviation Guide</h1>
        <p className='philately-paragraph'>
          Stamps are graded by condition, centering and if they have been hinged
          as well as by different variations, the values for these stamps have
          been checked against the Scott Stamp Catalogue
        </p>
        <ul className='abbreviation-list'>
          <li>
            Condition of stamps is written as <strong>M</strong> for an unused
            stamp, or <strong>U</strong> for a used stamp which has been sent
            through the post office. <strong>M</strong> stands for mint,
            although philatelists don't like this term, because stamps unlike
            coins are not minted they are printed, this is standard for some
            reason.
          </li>
          <br />
          <li>
            Hinging is an old philatelic practice that involves putting a
            polyurethane piece on the back of the stamp, this was for display
            purposes, philatelists have since moved to different methods of
            displaying stamps, this could be glassine envelopes, or vario sheets
            which are much safer to display in and do not devalue the stamp.
            Stamps that are hinged will have an <strong>H</strong>, lightly
            hinged will have an <strong>LH</strong>, ones that are not hinged
            will have <strong>NH</strong>
          </li>
          <br />
          <li>
            Stamps are also graded on the centering of the design, a stamp with
            four even margins is said to be of superb <strong>SU</strong> or{" "}
            <strong>Gem</strong> quality, three out four even margins would be{" "}
            <strong>XF</strong> or extra fine quality. Two out four even margins
            is known as very fine <strong>VF</strong>, below that is fine
            <strong> F</strong>. stamps can slide between each of the levels
            upon further inspection can be <strong>VF/F</strong> this would mean
            the stamp has very fine to fine centering
          </li>
          <br />
          <li>
            Variations such as specific cancels, <strong>BC</strong> a bullseye
            cancel which is struck in the middle of the stamp,{" "}
            <strong>HC</strong> a heavy cancel which is a hardly struck over
            inked cancellation of a stamp. <strong>PC</strong> or pen cancel is
            one that is done by the postmaster with you guessed it a pen.{" "}
            <strong>LC</strong> is a light cancel which is barely noticeable to
            the naked eye but can be seen with a magnifying glass
          </li>
          <br />
          <li>
            Other variations are <strong>S</strong> which stands for selvage
            which is the outer portion of the stamp sheet that is usually blank
            or has a plate number <strong>PN</strong> from the engraver. stamps
            can also be in blocks: <strong>B</strong> this signifies that there
            are multiple stamps in a block, 2 being the minimum to a maximum of
            12
          </li>
          <br />
          <li>
            some stamps will still have the original adhesive on them, this is
            marked as <strong>OG</strong> which in Philatelic terms means
            original gum
          </li>
          <br />
          <li>
            a few examples of the abbreviations written out so you know what to
            expect: 1909 George Washington 2 cent<strong> UNHVF $5.00</strong>{" "}
            which has the year of the stamp(1909), the design of the
            stamp(George Washington) and it is used, never hinged, and very fine
            centering, its value is five dollars
          </li>
          <br />
          <li>
            1846 Russian Coat of Arms(red) 2k <strong>MNHOGXF/SU</strong>{" "}
            $1,000. in this example we have a Russian stamp that has the
            national coat of arms colored red with a face value of 2 kopeks
            unused, never hinged, extra fine to superb quality with the original
            gum
          </li>
          <br />
        </ul>
      </div>
      <a className='stamp-view-link' href='/stamps-view'>
        View Stamps
      </a>
    </div>
  );
}

export default Philately;
