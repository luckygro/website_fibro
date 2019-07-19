import React, { Component } from "react";

// handle logo image
import logoimage from "../img/logo.png";

// handle background image
import heroimage1 from "../img/heroimage1.jpg";
const bgImage = {
  backgroundImage: 'url(' + heroimage1 + ')',
};

class Header extends Component {
  render() {
    return (
      <div id="Eyecatcher" style={bgImage} >

        <div id="Navbar" className="container">

          <div id="Logo">
            <a href="/">
              <img src={logoimage} alt="Fibro Ltd Logo" />
            </a>
          </div>
          <nav>
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">our company</a></li>
              <li><a href="#">our properties</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">our story</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </div>

        <div id="Slogan" className="container">
          <h1>fibro - room for your life</h1>
          <hr align="left"/>
          <h3>Welcome on our homepage!<br />
              We are a family business focusing on real estate<br />
              investments in the Okanagen Valley.
          </h3>
        </div>

      </div>
    );
  }
}

export default Header;
