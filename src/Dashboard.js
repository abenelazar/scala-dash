import React, { Component } from 'react';
import DashLeft from './DashLeft';
import DashRight from './DashRight';
import './style.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='scala-container'>
        <DashLeft />
        <DashRight username='skymet' />
      </div>
    );
  }
}