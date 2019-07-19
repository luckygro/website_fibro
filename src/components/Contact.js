import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faPhone, faMapMarker);

class Contact extends Component {
  render() {
    return (
      <footer id="Contact">
        <div className="container">
          <h2 className="hr">get in touch</h2>
          <p>You have any questions about our company? You want to rent a place in the Okanagan Valley? You want to sell you property?</p>
          <p>We would love to support you and get in touch with you. Feel free to give us a call or to send an e-mail!</p>

          <div className="contact-item contact-address">
            <FontAwesomeIcon icon="map-marker" />
            <span>Placeholder Street 1<br />12345 Vernon<br />CANADA</span>
          </div>

          <div className="contact-item contact-phone">
            <FontAwesomeIcon icon="phone" />
            <span>+1 23 456 789</span>
          </div>

          <div className="contact-item contact-mail">
            <FontAwesomeIcon icon="envelope" />
            <a href="mailto:info@fibroltd.com">info@fibroltd.com</a>
          </div>


        </div>
      </footer>
    );
  }
}

export default Contact;
