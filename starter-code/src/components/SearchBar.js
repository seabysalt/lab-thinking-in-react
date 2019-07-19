import React, { Component } from 'react'

export default class SearchBar extends Component {

handleSearch = e => {

    const { value, name } = e.target;

    this.props.onSearchChange(name,value);
  }

handleCheck = e => {
    const value = !this.props.checked;
    const name = e.target.name;
console.log(value)
    this.props.onSearchChange(name,value);
  }
  
  render() {
    return (
      <div className = "search">
      <h3>Search</h3>
      <input style={{width: "400px", margin: "10px" }} type="search" name="search" id="search" value={this.props.search} onChange={this.handleSearch}/>
      <label>
          <input style={{margin: "10px"}} type="checkbox" name="checked" value={this.props.checked} onChange={this.handleCheck}/>
            Only show products on stock
      </label>
    </div>
    )
  }
}

