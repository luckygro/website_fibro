import React, { Component } from "react";

import Company from "./Company";

import imgstory from "../img/family.jpg";

class Content extends Component {
  render() {
    return (
      <div id="Content">

        <Company />

        <section id="Properties">
          <div className="container">
            <h2 className="hr">our properties</h2>
            <p>Fibro Holding owns residential, commercial, multi-family and retail real estate in the okanagan valley and is always looking up for new projects and investments.</p>
          </div>
        </section>

        <section id="Services">
          <div className="container">
            <h2 className="hr">our services</h2>
            <p>we are constantly seeking for new challenges...</p>
          </div>
        </section>

        <section id="Story">
          <div className="container">
            <h2 className="hr">our story</h2>
            <img src={imgstory} alt="five brothers as a family business" />
            <div className="story-content">
              <p>hier kommt ein kurzer Text, 1-2 Sätze hin :)</p>
            </div>
          </div>
        </section>


      </div>
    );
  }
}

export default Content;
