import React, { Component } from 'react'

export default class ProductRow extends Component {

  render() {

    console.log('++++++',this.props.products)

  const productsJSX = this.props.products.map((product, index) => {
    if (product.stocked === true) {
      return (
        <div className="name-price" key={index}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      )} else {
        return (
          <div className="name-price" key={index}>
            <p style={{color: "red"}}>{product.name}</p>
            <p>{product.price}</p>
          </div>
        )}
  })

  return (
    <div>
      {productsJSX}
    </div>
  )
}
}
