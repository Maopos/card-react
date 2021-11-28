import React, { useEffect } from "react";
import logo from "../logo.svg";
import { gsap } from "gsap";

const Card = () => {

  useEffect(() => {
    let t1 = gsap.timeline();

    t1.from(".card1", {
      stagger: 0.2,
      opacity: 0,
      x: -20,
    });

    t1.from(".App-logo", {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    });

    t1.from(".user-online-indicator", {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    });

    t1.from(".profile-name", {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    });

    t1.from(".profile-role", {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    });

    t1.from(".social-buttons", {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    });

    
  });

  return (
    <div className="container1">
        <div className="row">

       
      <div className="card1 ">
        <div className="card-header1">
          <div className="avatar">
            <div className="user-online-indicator"></div>
            <img src={logo} alt="user" className="App-logo" />
          </div>
          <div className="profile-name">
            <h1>React Next</h1>
          </div>
          <div className="profile-role">Frontend Devolopment</div>
        </div>
        <div className="card-footer1">
          <div className="social-buttons">
            <button>
              <i className="bi bi-instagram"></i>
            </button>
            <button>
              <i className="bi bi-facebook"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="card1 ">
        <div className="card-header1">
          <div className="avatar">
            <div className="user-online-indicator"></div>
            <img src={logo} alt="user" className="App-logo" />
          </div>
          <div className="profile-name">
            <h1>React Redux</h1>
          </div>
          <div className="profile-role">Frontend Devolopment</div>
        </div>
        <div className="card-footer1">
          <div className="social-buttons">
            <button>
              <i className="bi bi-instagram"></i>
            </button>
            <button>
              <i className="bi bi-facebook"></i>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
