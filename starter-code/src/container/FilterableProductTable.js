import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'

export default class FilterableProductTable extends Component {

state = {
  checked: false, 
  search: "",
 }

onSearchChange = (name, value) => {
 this.setState({
    [name]: value
   })
 }

  render() {

    const { search, checked } = this.state;

    const products = this.props.products.data.filter(product => {
      if (checked) {
        return (
          product.stocked && product.name.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return product.name.toLowerCase().includes(search.toLowerCase())
      }
    })

    console.log('----',products)
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar checked={this.state.checked} onSearchChange={this.onSearchChange} />
        <ProductTable products = {products}/>
      </div>
    )
  }
}
