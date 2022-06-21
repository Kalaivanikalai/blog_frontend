import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
const Header = () => {
  const classNameNamees = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
      <>
          <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand">
                  <img src="https://i.imgur.com/tqsxQUD.png" alt=""/>
                </a>
                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

             
                 <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                 {isLoggedIn && (
                 <ul id="nav" class="navbar-nav ms-auto" value={value} onChange={(e, val) => setValue(val)}>
                    <li className="nav-item">
                      <Link to="/blogs" className="page-scroll active"> Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/myBlogs" className="page-scroll "> My Blogs</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/blogs/add" className="page-scroll "> Write Your Blog</Link>
                    </li>
                 </ul>
                 )}
                
                 <ul id="nav" class="navbar-nav ms-auto">
                 {!isLoggedIn && (
                    <>
                    <li className="nav-item">
                    <Link to="/auth" className="page-scroll "> Login </Link>
                    </li>
                    
                    </>
                    )}
                  </ul> 
          {isLoggedIn && (
                    <>
                    <button className="btn btn-outline-primary">
                    <Link to="/auth" className="page-scroll" onClick={() => dispath(authActions.logout())}> Logout </Link>
                    </button> 
                  </>
                     )}
                   
                    
                 
                
                
                </div>
              </nav>
          </div>
          </div>
         
        </div>
      
      </div>
      </>
  );
};

export default Header;