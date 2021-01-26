import React from "react";

export const Delivery = ()=>{
    return (

        <div className="thank-you-card">
          <div className="ty-card-details">
            <div className="row">
              <h2> Delivery Times and Confirmation </h2>
            </div>
            <p>Items are only shipped on Friday’s. Tracking confirmation will be sent upon shipment.
             </p>
           
          </div>
          <div className="ty-card-details">
            <h4 className="ftr-subtitle">Questions or comments? </h4>
            <p>I would absolutely love to hear from you! Feel free to take ‘before’ pictures and chart your progress weekly or biweekly. Keep me posted. 
             </p>
            <ul className="ftr-links">
            
              <li>
                <a>
                  <img alt="mail icon" src="/vectors/email.svg" height={16} width={16} />
                  mya@beautybymyangela.com
                </a>
              </li>
              <li>
                <a href="https://www.google.com/url?q=https://www.instagram.com/custombeautybymaya/?hl%3Den&sa=D&ust=1584560379908000">
                  <img alt="location icon" src="/vectors/instagram.svg" height={16} width={16} />
                  @custombeautybymaya : (Feel free to follow me!)
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
}