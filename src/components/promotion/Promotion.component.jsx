import React from "react";

export const Promotion = () => {
    return(
        <div className="promo">
        <div className="promo-overlay" />
        <div className="promo-content">
          <img className="profile-img" width={140} height={140} alt="Akoyu logo" src="/images/akoyu.png" />
          <div className="promo-ctn-col">
            <p> Looking for incredible all-natural natural body/face soaps, moisturizers, and cleansers that
              make you feel like you came from a spa? Look no further than <b>Akoyn Beauty</b>.</p>
            <a href="https://www.akoynbeauty.com/" className="btn-visit"> visit </a>
          </div>
        </div>
      </div>
    )
}