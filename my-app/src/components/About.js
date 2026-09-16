import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {

  return (
    <div className="container">
      <h2 className="my-3" id="ab">About Us</h2>  
      <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                id="one"
                type="button"
                style={props.myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
               <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={props.myStyle} >
               TextUtils is a simple online tool that instantly converts your text to uppercase or lowercase.
               It automatically removes extra spaces, making your text clean and professional.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                id="two"
                style={props.myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                TextUtils is free to use as it has been made for saving time of millions of users around the globe.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                id="three"
                style={props.myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                TextUtils is compatible for all browsers and it even works seamlessly on samrtphones.  
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
