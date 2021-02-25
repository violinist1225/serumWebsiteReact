import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Nav.css';
const Nav = ()=>{
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if(!location) return false;
        const {pathname} = location;
   
        if(match){
            return pathname === match.url;

        }
        return false
    }
    useEffect(()=>{
        document.querySelector(".toggle-button").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.querySelector(".sidebar").classList.toggle("hidden-sidebar");
          });
    
          document.body.addEventListener("click", (e) => {
            if (!e.target.classList.contains("sidebar")) {
              document.querySelector(".sidebar").classList.add("hidden-sidebar");
            }
          });
    },[])
    return (
        <>


            <div className="nav-container activated">
            {/* small screen nav */}
            <div className="nav-small-screen">
                <span className="toggle-button" id="toggle-button"><img alt="toggle button" src="/vectors/humburger.svg" height={18} width={18} /></span>
                <span className="brand-text"><b>Serum</b></span>
            </div>
            <div className="nav">
                {/* serum logo */}
                <img className="brand" alt="beautybymya logo" src="/images/mbm_logo.jpg" height={60} width={60} />
                <span className="brand-text">Serum</span>
                {/* nav content */}
                <div className="nav-content">
                <ul>
                    <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="active-nav" isActive={checkActive}>Home </NavLink>
                    <NavLink to="/consult" activeClassName="active-nav" className="nav-link" isActive={checkActive}>Free Skincare Consult </NavLink>
                    <a href="https://www.facebook.com/groups/3415578371904870" target="_blank" className="nav-link"  > Facebook Group</a>
                    <NavLink to="/otherproducts" activeClassName="active-nav" className="nav-link" isActive={checkActive}>Other Personal Products </NavLink>
                    <a href="http://permanentmakeupbymaya.com/" target="_blank"  className="nav-link" >Permanent Eyeliner </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>

        <div className="sidebar hidden-sidebar">
          <div className="card-header">
            <img className="brand" alt="beautybymya logo" src="/images/mbm_logo.jpg" height={90} width={90} />
          </div>
          <div className="card-body">
            <ul className="side-nav">
            <li>
                <NavLink to="/" activeClassName=" active-side-nav" isActive={checkActive} className="side-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/consult" activeClassName=" active-side-nav" isActive={checkActive} className="side-link">Free Skincare Consult</NavLink>
              </li>
              <li>
                <a href="https://www.facebook.com/groups/3415578371904870" target="_blank" className="side-link">Facebook Group</a>
              </li>
              <li>
                <NavLink to="/otherproducts" activeClassName="active-side-nav" isActive={checkActive} className="side-link">Other Personal Products</NavLink>
              </li>
              <li>
                <a href="http://permanentmakeupbymaya.com/"  target="_blank" className="side-link">Permanent Eyeliner</a>
              </li>
            </ul>
          </div>
        </div>
        </>
      );
    
}

export default Nav;