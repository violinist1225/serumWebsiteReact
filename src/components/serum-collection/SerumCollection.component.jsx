import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { SerumList } from "../../constants/SerumList";
import axios from "axios";

export const SerumCollection = ({product, handleSelect, test}) => {
  let selectedIndex = 0;
  const hasNoImages = (serum) =>{
    return !serum.images || (serum.images  && serum.images.length <= 0);
  } 
    return (
        <div className="product-grid">
          <h1 className="block-title">Serums</h1>
          <div className="product-list">
            {SerumList.map((serum, index)=> (
            <div key = {index} className="product-instance">
              {serum.images && serum.images.length > 0 && (
                <Carousel   showArrows={true} className="pi-section slider-cont" showStatus={false} autoPlay={true} infiniteLoop={true} showThumbs={true}>
                  {
                    serum.images.map((serum_image, key)=>(
                      <div key={key}> <img alt={serum.title} src={serum_image} className="img-rounded" style={{objectFit:"contain"
                      }} /></div>
                    ))
                  }
                </Carousel>
              )}
               {hasNoImages(serum) && (
                <Carousel  showThumbs={false} showArrows={true} className="pi-section slider-cont" showStatus={false} autoPlay={true}>
                  <div> <img alt={serum.title} src="/vectors/brush.svg" className="img-rounded" /></div>
                </Carousel>
              )}
              <div className="pi-section pi-details">
                <h3>{serum.title}</h3>
                {serum.titleDescriptions && <p>{serum.titleDescriptions}</p>}
                <ul>
                {serum.titleList && serum.titleList.map((title, index)=> <li key={index}><p>{title}</p></li>)}
                </ul>
                {serum.descriptions.map((description, key)=>(
                   <p key={key}> {description} </p>
                ))}
                {serum.ingredients && serum.ingredients.length > 0 && 
                (
                  <>
                    <h5> Ingredients</h5>
                    <ul>
                      {serum.ingredients && serum.ingredients.map((serum_ingredient, key)=>(
                          <li key={key}><p>{serum_ingredient}</p></li>
                      ))}                      
                    </ul>
                  </>
                )}
              
                <button onClick={()=> {handleSelect(product)}} type="button" className="btn-cart">
                  <i className="mdi mdi-basket-plus-outline" />
                  Add to Cart
                </button>
              </div>
            </div>

            ))}
           </div>
        </div>
      );
}