import React from "react";
import "./firstSec.css";
import { Link } from "react-router-dom";

function FirstSec() {
  return (
    <div className="hero-container">
      <h1 className="text-center text-white display-1">THE WORLD AWAITS</h1>
      <p className="text-center mt-1 h2 text-white">
        What are you waiting for ?
      </p>
      <div className="mt-5">
        <Link to={"/tourists"}>
          <button
            type="button"
            className="btn btn-lg btn-outline-light m-1 firstSecBtn"
          >
            TOURISTS
          </button>
        </Link>
        <Link to={"/trailer"}>
          <button
            type="button"
            className="btn btn-lg btn-light m-1 firstSecBtn"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FirstSec;
