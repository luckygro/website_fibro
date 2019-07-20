import React, { Component } from "react";

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';


library.add(faCircle, faUsers, faSearchLocation, faBuilding);


class Company extends Component {
  render() {
    return (

      <section id="Company">
        <div className="container">
          <header>
            <h2 className="hr">our company</h2>
          </header>
          <div className="company-content">
            <ul>

              <li>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                  <FontAwesomeIcon icon="search-location" inverse className="fa-stack-1x"/>
                </span>
                <h4>local</h4>
                <h5>we live in Vernon, BC</h5>
              </li>

              <li>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                  <FontAwesomeIcon icon="users" inverse className="fa-stack-1x"/>
                </span>
                <h4>family business</h4>
                <h5>for two generations</h5>
              </li>

              <li>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                  <FontAwesomeIcon icon="building" inverse className="fa-stack-1x"/>
                </span>
                <h4>owner managed</h4>
                <h5>we care about our properties</h5>
              </li>


            </ul>
          </div>

        </div>
      </section>

    );
  }
}

export default Company;
