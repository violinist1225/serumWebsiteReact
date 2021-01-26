import React from "react";

export const Footer = ()=>{
    return (
        <div className="footer-cont">
        <div className="footer-ctn">
          <div className="tm-col ftr-section">
            <div className="logo-cont">
              <img src="/images/mbm_logo.jpg" width={140} height={140} alt="Make up by Maya logo" />
            </div>
            
          </div>
          <div className="tm-col ftr-section contact-us">
            <h3 className="ftr-subtitle">Contact Me</h3>
            <ul className="ftr-links">
              <li>
                <a>
                  <img alt="phone icon" src="/vectors/phone_icon.svg" height={16} width={16} />
                  760-459-4434
                </a>
              </li>
              <li>
                <a>
                  <img alt="mail icon" src="/vectors/email.svg" height={16} width={16} />
                  mya@beautybymyangela.com
                </a>
              </li>
              <li>
                <a href="https://www.google.com/url?q=https://www.instagram.com/custombeautybymaya/?hl%3Den&sa=D&ust=1584560379908000">
                  <img alt="location icon" src="/vectors/instagram.svg" height={16} width={16} />
                  @custombeautybymaya
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}