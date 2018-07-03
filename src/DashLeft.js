import React, { Component } from 'react';
import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome'
import { faServer, faFile, faBuilding, faCode, faTerminal, faBars, faPlug, faDesktop, faComment } from '@fortawesome/free-solid-svg-icons'

export default class DashLeft extends Component {
  render() {
    return (
        <div className='dash-left'>
          <div className='dash-scala-logo' />
          <div className='dash-customer-logo' />
          <ul className='dash-links'>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faServer} />
              Jobs
              </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faFile} />
              Files
              </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faBuilding} />
              Workflows
              </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faCode} />
              Presets
            </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faTerminal} />
              Software
              </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faBars} />
              Usage
              </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faPlug} />
              Connections
            </li>
            <li className='dash-link'>
              <FontAwesome className='dash-link-icon' icon={faDesktop} />
              Desktops
            </li>
          </ul>
          <div className='dash-footer'>
            <ul className='dash-footer-links'>
              <li className='dash-link'>
                <FontAwesome className='dash-link-icon' icon={faComment} />
                Contact
                </li>
            </ul>
            <p className='dash-copyright-statement'>
              © 2018 Ari Ben-Elazar.
              <br />
              All rights reserved
            </p>
          </div>

        </div>
    );
  }
}
