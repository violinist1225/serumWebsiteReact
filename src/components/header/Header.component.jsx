import React from "react";

export const Header = (serum) =>{ 
    return (
      <div className="page-header-container" style={{background:"url('/images/HeaderImage.png')",
      backgroundSize: "contain",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed"}}>
        <div className="ph-content">
          <div className="ph-desc">
            <h1> Simply The Best in Natural Beauty &amp; Skincare </h1>
            <p>Your skin and hair serums are prepared using only natural substances like vitamins, fruit
              extracts and essential oils — components that fight visible signs of aging, contribute to even
              tone, and give your skin a youthful glow. </p>
          </div>
        </div>
      </div>
    
    )
}