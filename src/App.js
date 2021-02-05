import './App.css';
import './AppQueries.css';
import { Header } from './components/header/Header.component';
import { useState } from 'react';
import { Promotion } from './components/promotion/Promotion.component';
import { Footer } from './components/footer/Footer.component';
import { Cart } from './components/cart/Cart.component';
import Questionnaire from './components/questionnaire/Questionnaire.component';
import { SerumCollection } from './components/serum-collection/SerumCollection.component';
import  { Testimonial } from './components/testimonial/Testimonial.component';
import { Blurb } from './components/blurb/Blurb.component';
import { LasheSection } from './components/lash/Lashe.component';
import { Delivery } from './components/delivery/Delivery.component';
import { QuestionnaireCompleted } from './components/questionnaire/QuestionnaireCompleted.component';

export const App = () => {

  const [displayCartModal, setDisplayCartModal] = useState(false);
  const [completed, setCompleted] = useState(false);


  const handleSelect = (product) => {
    setDisplayCartModal(true);
  }

  const questionnaireCompleted = ()=>{
    setCompleted(true);
  }
  const handleClose = () => {
    setDisplayCartModal(false);
  }
  return (
    <>
    <div className="page">
      <Header />
 
      {/* section: product description */}
      <div className="prodcut-desc">
        <div className="pd-img-cont">
          <img className="product-img" alt="Product Collection" src="/images/products/product_list.png" />
        </div>
        <div >
          <h2> Glowing, Gorgeous Results </h2>
          <p>These innovations in cosmetic skincare contain more active compounds to nourish and replenish your skin. Exceptional results are achieved without additives, thickening agents, artificial fragrances or harmful dyes. 
          </p>
          <p>You won’t find any chemicals in my formulas, including: </p>
          <ul>
            <li>Sulfates</li>
            <li>Formaldehyde</li>
            <li>Parabens</li>

          </ul>
          <p>95%  products I make are created  with 100% vegan ingredients and none are ever  tested on animals.</p>
        </div>
      </div>
      {/* section: Blurb Section*/}

      <Blurb/>
      {/* section: Giraffe Lash*/}
      <LasheSection />
      {/* section: serums */}
      <SerumCollection  test='this is a test' handleSelect = {(product) => {
            handleSelect(product);
          }}/>

      {/* section: special serums */}
      <div className="special-serums">
        <h1 className="block-title">Get Your Own Special Custom Serum</h1>
        <div className="ss-content">
          <p className="desc"> I’ll focus on your needs to create an individual solution and help you achieve your skincare goals. If you need a special formulation or have very special skin, then I can still help you. </p>
          <p className="desc">But I would need some information about you, so simply fill out questionnaire towards end of page. And then pay for it by selecting ‘custom serum’ in the cart. </p>
         

          </div>
      </div>
      {/* section: special serums */}
      <div className="special-serums">
        <h1 className="block-title">Brief Survey for Custom Serum Orders</h1>
        <div className="ss-content" style={{color:"black"}}>
          <p > <b>Submit the questionnaire below and I will respond within 24 hours to your inquiry</b>. I can
            create a special formula for you at a special price. Quotes will depend on inquiry, the price is $70 for 1 oz. </p>
          {/* form */}
          <Questionnaire questionnaireCompleted={()=>{ questionnaireCompleted()}}/>

          </div>
      </div>
      
      {/* section: Delivery*/}
      <Delivery/>

      {/* section: Testimonial*/}
      <Testimonial/>

      {/* section: Gurantee*/}
      <div className="special-serums">
        <h1 className="block-title">My Guarantee</h1>
        <div className="ss-content">
          <p className="desc">I want you to be absolutely thrilled with your success and feel beautiful. If you’re not completely satisfied after six weeks of use as directed, contact me for a completely new formulation at no charge.  </p>
          <p className="desc">Your specific preparation details for custom serums will be referenced to create a more potent formulation.  </p>
          <p className="desc">For regular serums, I will customize a special one for you at no charge if the original formula didn't work. </p>
          <p className="desc">My goal is to get you results that make you happy!</p>

          </div>
      </div>
      {/* section:Promotion */}
      <Promotion />
      {/* section: footer */}
      <Footer/>
    
    </div>
      {/* section: Cart Modal*/}
      {displayCartModal && <Cart handleClose = {handleClose}/>}
      {/* section: Questionnaire Completed Modal*/}
      {completed && <QuestionnaireCompleted handleClose= {()=>{
        setCompleted(false)
      }}/>}
      </>
  );
}

export default App;
