import React, { Component } from 'react'
import './mainColumn.css'
import { FiSearch } from 'react-icons/fi';
class MainColumn extends Component {
  render() {
    return (
      <div className='container'>
        <button><FiSearch className='search-icon'/></button>
        <input type="text" placeholder="Another location"></input>
        <ul className='city-list'>
          <li className="city">Hanoi</li>
          <li className="city">New York</li>
          <li className="city">California</li>
          <li className="city">London</li>
        </ul>
        <p className='weather-detail-text'>Weather Details</p>
        <ul className='detail-list'>
          <li className="detail-container"><p>Feels Like</p><p>XXX</p></li>
          <li className="detail-container"><p>Humidity</p><p>XXX</p></li>
          <li className="detail-container"><p>Humidity</p><p>XXX</p></li>

        </ul>
      </div >
    )
  }
}

export default MainColumn