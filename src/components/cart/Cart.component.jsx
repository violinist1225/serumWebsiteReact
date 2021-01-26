import '../../App.css';

import React from "react";

export const Cart = ({handleClose})=>{
    return (
        <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h2>Order Serum</h2>
            <button  className="btn-close" onClick={()=>{
                handleClose()
            }}><i className="mdi mdi-close" /></button>
          </div>
          <div className="modal-body">
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="Q4WU5ZCSG644A"/>
              <input type="hidden" name="on0" defaultValue="Serums" />
              <input type="hidden" name="currency_code" defaultValue="USD" />
              <div className="form-row">
                <div className="ss-content" style={{width: '100%'}}>
                  <p> <b>You don't need to have Paypal to order - Please Proceed </b> </p></div>
                <div className="fr-select-cont">
                  <select name="os0" className="fr-select">
                      <option value="Giraffe-Lash Eyelash/brow Growth Serum (10 mL)">Giraffe-Lash Eyelash/brow Growth Serum (10 mL) $50.00 USD</option>
                      <option value="NOTOX Anti-Aging HYPER-pigmentation/Wrinkles (1 Oz)">NOTOX Anti-Aging HYPER-pigmentation/Wrinkles (1 Oz) $65.00 USD</option>
                      <option value="Sleep Magic (Fall Asleep Easily) Serum (0.5 Oz)">Sleep Magic (Fall Asleep Easily) Serum (0.5 Oz) $25.00 USD</option>
                      <option value="Liquid Diamonds Spray (1 Oz)">Liquid Diamonds Spray (1 Oz) $65.00 USD</option>
                      <option value="Custom Skin Serum (1 Oz)">Custom Skin Serum (1 Oz) $70.00 USD</option>
                      <option value="Eye Serum (Puffiness/dark circles) (0.5 OZ)">Eye Serum (Puffiness/dark circles) (0.5 OZ) $20.00 USD</option>
                      <option value="Magic Clay Mask (8 Oz tin)">Magic Clay Mask (8 Oz tin) $20.00 USD</option>
                      <option value="Acne NO MORE Serum (.5 Oz)">Acne NO MORE Serum (.5 Oz) $35.00 USD</option>
                      <option value="Hair Magic Serum (1 Oz)">Hair Magic Serum (1 Oz) $40.00 USD</option>
                      <option value="HyPO-pigmentation Serum (1 Oz)">HyPO-pigmentation Serum (1 Oz) $65.00 USD</option>
                  </select>
                </div>
              </div>
              <div className="form-row flex-row">
                <button type="submit" className="btn-submit align-left"> Add To Cart </button>
                <span>
                  <img width={50} className="align-right" alt="PayPal - The safer, easier way to pay online!" src="/vectors/paypal.svg" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}