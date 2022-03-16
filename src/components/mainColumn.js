import React, { Component } from 'react'
import './mainColumn.css'
import { FiSearch } from 'react-icons/fi';
class MainColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  triggerSearch() {
    console.log("HNDCMM")
  }
  handleSubmit(event) {
    this.props.search(this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
        <button><FiSearch className='search-icon' />
          <input type="submit" value="Submit" />
        </button>
        <input type="text" placeholder="Another location" value={this.state.value} onChange={this.handleChange} />
        </form>
        <ul className='city-list'>
          <li className="city">Hanoi</li>
          <li className="city">New York</li>
          <li className="city">California</li>
          <li className="city">London</li>
        </ul>
        <p className='weather-detail-text'>Weather Details</p>
        <ul className='detail-list'>
          <li className="detail-container"><p>Feels Like</p><p>{this.props.weatherDetails ? this.props.weatherDetails[0] : 0}</p></li>
          <li className="detail-container"><p>Humidity</p><p>{this.props.weatherDetails ? this.props.weatherDetails[1] : 0}</p></li>
          <li className="detail-container"><p>Pressure</p><p>{this.props.weatherDetails ? this.props.weatherDetails[2] : 0}</p></li>
        </ul>
      </div >
    )
  }
}

export default MainColumn