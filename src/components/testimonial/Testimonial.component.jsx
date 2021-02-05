import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
export const Testimonial = () =>{
  const yelp_link = "https://tinyurl.com/y4ad3shp";
  const google_review_link = "https://tinyurl.com/y6j8hmee";
  
      return (
        <div className="testemonials">
          <h1 className="block-title">What Clients Are Saying (Click reviews to read)</h1>
          <div className="testemonial-content">
          <SRLWrapper>
              <a href="/images/reviews/review1.jpg">
                <img className="slide-img" src="/images/reviews/review1.jpg" alt="Bianca W." />
              </a>
              <a href="/images/reviews/review2.jpg">
                <img className="slide-img" src="/images/reviews/review2.jpg" alt="Rachel" />
              </a>
              <a href="/images/reviews/review3.jpg">
                <img className="slide-img" src="/images/reviews/review3.jpg" alt="Rebecca L." />
              </a>
              <a href="/images/reviews/review4.jpg">
                <img className="slide-img" src="/images/reviews/review4.jpg" alt="Susan Brantley" />
              </a>
              <a href="/images/reviews/review5.jpg">
                <img className="slide-img" src="/images/reviews/review5.jpg" alt="Marsha Teasley" />
              </a>
              <a href="/images/reviews/review6.jpg">
                <img className="slide-img" src="/images/reviews/review6.jpg" alt="Melanie  stj" />
              </a>
              <a href="/images/reviews/review6.jpg">
                <img className="slide-img" src="/images/reviews/review7.jpg" alt="Michelle  P." />
              </a>
          </SRLWrapper>
            {/* yelp*/}
            <div className="tc-section" id="yelp">
             <div className="tc-button-section">
                <a className="tc-btn-link" href={yelp_link} target="_blank" id="btn-yelp">
                  <svg id="Bold" enableBackground="new 0 0 24 24" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                    <path className="yelp-path" d="m12.062 17.662c.038-.934-1.266-1.395-1.829-.671-1.214 1.466-3.493 4.129-3.624 4.457-.347 1 1.28 1.638 2.312 2.024 1.121.42 1.919.591 2.392.51.342-.071.562-.248.67-.533.089-.245.08-5.568.079-5.787z" />
                    <path className="yelp-path" d="m11.522.642c-.08-.31-.295-.51-.647-.6-1.037-.272-4.966.838-5.698 1.624-.234.238-.318.515-.248.828l4.985 8c1.018 1.628 2.298 1.139 2.214-.681h-.001c-.066-1.199-.544-8.775-.605-9.171z" />
                    <path className="yelp-path" d="m9.413 15.237c.942-.29.872-1.671.07-1.995-2.139-.881-5.06-2.114-5.285-2.114-.876-.052-1.045 1.201-1.134 2.096-.08.81-.084 1.552-.014 2.229.066.714.221 1.443.933 1.485.309-.001 5.383-1.686 5.43-1.701z" />
                    <path className="yelp-path" d="m20.514 12.052c.403-.281.342-.7.347-.838-.108-1.024-1.83-3.61-2.692-4.029-.328-.152-.614-.143-.858.029-.323.219-3.24 4.444-3.413 4.619-.567.767.244 1.871 1.092 1.648l-.014.029c.341-.115 5.274-1.282 5.538-1.458z" />
                    <path className="yelp-path" d="m15.321 15.586c-.881-.315-1.712.81-1.2 1.581.145.247 2.809 4.705 3.043 4.871.225.191.507.219.83.095.905-.362 2.865-2.876 2.992-3.857.051-.348-.042-.619-.286-.814-.197-.176-5.379-1.876-5.379-1.876z" />
                  </svg>
                  <span> more reviews </span>
                </a>
              </div>
            </div>
            {/* google */}
            <div className="tc-section" id="google">
             <div className="tc-button-section">
                <a className="tc-btn-link" href={google_review_link} target="_blank" id="btn-google">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={24} height={24} viewBox="0 0 510 510" style={{enableBackground: 'new 0 0 510 510'}} xmlSpace="preserve">
                    <g>
                      <g id="glass">
                        <path className="google-path" d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25
                                                  s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5
                                                  c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z" />
                      </g>
                    </g>
                  </svg>
                  <span> more reviews </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    
  };