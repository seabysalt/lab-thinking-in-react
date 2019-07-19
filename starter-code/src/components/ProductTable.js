import React, { Component } from 'react'
import ProductRow from '../components/ProductRow'

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <div className="name-price">
          <h4>Name</h4>
          <h4>Price</h4>
        </div>
        <ProductRow products = {this.props.products} />
      </div>
    )
  }
}
