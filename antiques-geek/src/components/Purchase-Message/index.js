import React from "react";
import "./style.css";

function PurchaseMessage() {
  return (
    <div>
      <div className='purchase-message-card'>
        <div>
          <header className='purchase-message-header'>
            So you want to purchase an item from me, I will explain your options
            here:
          </header>
          <p className='purchase-message-paragraph'>
            Option one: Email can be sent to me at this address.
            denvernick@hotmail.com <br /> in your email you will state your
            name, what you are trying to purchase, your shipping information if
            applicable, if you are local to Denver, CO a delivery or pick-up can
            be arranged. Other wise please include your shipping address. What
            payment method are you using, I accept U.S. currency, checks,
            Pay-Pal, Venmo, Zelle. Ask any questions about a particular item
            that you have, interested in more than one item, let me know
          </p>
          <p className='purchase-message-paragraph'>
            Time is valuable so please don't waste mine, if you are not serious
            about making a purchase, stop and turn around, think about it then
            come back. The last thing I want is an inbox full of time wasters,
            if you can not follow theses instructions you'll be blocked
          </p>
          <p className='purchase-message-paragraph'>
            Example email: <br />
            Hello, my name is (your name) I am interested in (item listed), my
            address is (your address). I will be using (payment method) as my
            payment method thanks for your time
          </p>
          <p className='purchase-message-paragraph'>
            Option two: You can text me at this number 303-931-0974. Text only
            no phone calls, I will not answer any phone calls. similar to the
            email procedure I expect the same in your text message.
          </p>
          <p className='purchase-message-paragraph'>
            Example text: <br />
            Hello my name is (your name) I am interested in (item listed) my
            address is (your address) I will be purchasing with (payment method)
          </p>
          <p className='purchase-message-paragraph'>
            If you have followed the instructions, I will get back to you as
            promptly as I can. Payment details will be discussed, shipping
            arrangements, and I will ask if you have any further questions.
          </p>
          <p className='purchase-message-paragraph'>
            Say you are curious to know about a certain item before you purchase
            it or are curious about something that isn't listed from one of my
            collections. For these inquiries you will send an email to the above
            address in the subject line, you will state the name of the item,
            coin, or stamp your are looking for. In the email body you can ask
            your questions.
            <br />
            <strong className='purchase-message-closer'>
              Thanks! Have a great day
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PurchaseMessage;
