import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <>
      <div style={{ width: "75%", margin: "auto", paddingTop: "150px", cursor: 'pointer'}}>
        <h3>HELP</h3>
        <h3>SHIPPING & PAYMENT INFORMATION</h3>
        <div className="helppage1" style={{ cursor: 'pointer' }}>
              <h4>When will my order ship?</h4>
              <p>After your payment is verified, it takes up to 24 hours to process and ship your order. This does not include weekends or holidays. Purchases<br/> made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be<br/> shipped out on the following Monday.</p>
        
          
            <div className="helppage2">
              <h4>Will I have to pay international taxes & duties?</h4>
              <p>Your order may be subject to import duties and taxes, which are levied once a shipment reaches your country. The general amount for the <br/>duties and taxes fee is about 20% of the dollar amount of the merchandise. However, this is just a general guideline and may vary <br/>depending on the country to which the order was shipped. You should contact your customs office for specific amounts and percentages.<br/>

              MVMT cannot control and is not responsible for any duties/taxes applied to your package. You will be responsible for paying additional <br/>charges for customs clearance. Customs policies vary widely from country to country; please contact your local customs office for further information. Note, in rare occasions custom agents may delay delivery of some packages.</p>
            </div>
      <hr/>
      <h3>ORDER INFORMATION & CONCERNS</h3>
            <div className="helppage2">
              <h4>I need to change something on my order. How can I do that?</h4>
              <p>If you need to change or cancel your order, please contact us immediately. Once our warehouse has processed your order, we will be <br/>unable to make any changes.</p>
            </div>
    
         
            <div className="helppage2">
              <h4>My order status says "Unfulfilled". What does that mean?</h4>
              <p>"Unfulfilled" just means that we successfully received your order! Once your order is shipped, you'll receive a tracking number and your<br/> order status will change to "Fulfilled."</p>
            </div>
         
          
            <div className="helppage2">
              <h4>Why was my order canceled?</h4>
              <p>"If your order was unexpectedly cancelled, chances are that our fraud filter marked your order as fraudulent. If you are certain that that is<br/> not true, please order again with a Paypal account. If you do not have Paypal, you can easily sign up at www.Paypal.com"</p>
            </div>
          
          <hr/>
          <h3>WATCH SPECS & WARRANTY</h3>
            <div className="helppage2">
              <h4>What type of movement is used??</h4>
              <p>We didn't look past one feature when designing MVMT. With this said, we went with a Japanese Miyota Precision Quartz Movement which <br/>is one of the most well known in the industry</p>
            </div>
        
          
            <div className="helppage2">
              <h4>Is there a warranty?</h4>
              <p>Innerbeauty has a limited warranty that covers manufacturer's defects for two years after the original purchase date from an authorized dealer. Basically, if the watch parts or mechanics don't work properly, and it's our fault, we will repair or replace your product for free. However,<br/> this does not cover any abuse you might put your watch through on your own. The warranty does not cover water damage, normal wear <br/>and tear, batteries, accidental glass damage, scratches, strap damage, or theft. Proof of purchase is required for all warranty claims and <br/>service requests, so please keep your receipt. If you've purchased from our site or Amazon, the order number will suffice; otherwise if you<br/> purchased via another authorized seller or retail location, you will need to contact them directly as they handle their own warranty claims,<br/> returns and exchanges.</p>
            </div>
       <hr/>
       <h3>OTHER INFORMATION</h3>
          <div className="helppage2">
            <h4>Ineer beauty QRHow do I become a Inner beauty reseller? Do you have any authorized resellers?</h4>
            <p>While we appreciate that you want to be a reseller of MVMT, we do not currently have any reseller or wholesale program. Please email us <br/>at wholesale@mvmtwatches.com and we may get back to you when we decide to go down that path!</p>
          </div>
          <div className="helppage2">
          <h4>Discount Exclusions</h4>
          <p>Coupons do not apply to sale items</p>
        </div>
        <div className="helppage2">
        <h4>What is your return/exchange policy?</h4>
        <p>Any new product can be returned for a full refund within 60 days of delivery. We offer free and <br/>easy returns for all domestic and international orders for items placed on mvmt.com. Expedited shipping charges are non-refundable. For warranty claims or parts <br/>replacement, please get in touch with us at support@mvmt.com, as the process will be different.<br/>
        How do I start my free return?<br/>
        To start your return, please locate your order number. Once you have printed your return label, attach the label to your return package. If <br/>possible, use the same shipping materials that your order arrived in. Remove any previous labels <br/>and securely tape the new shipping label<br/> onto your package. Drop off your package at any facility designated by the carrier on your label.
        <br/>Please note:<br/>
        <ul>
        <li> Make sure you are only returning item(s)that your return label has listed. Any additional item(s)<br/>may not be appropriately processed if no return is requested.</li>
        <li> Choose the appropriate reason for return from the dropdown to ensure your return is processed accordingly.</li>
        <li> Allow up to 10 business days from the day the item is delivered to our warehouse to be processed.</li>
        <li>  Refunds will be returned to the same form of payment.</li>
        </ul>
        
      </p>
      </div>
        </div>
      </div>
    </>
  )
}

export default Help;

