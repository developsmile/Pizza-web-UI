import React from 'react'
import '../css/Product.css'
import {Card} from '../components/Card'
import {ProductData} from '../Data/ProductData'
const Products = () => {
  return (
    <>
        <div className="product-title">
            <p>Products</p>
        </div>
        <div className="product-container">
          {
            ProductData.map(item=> <Card key={item.id} item={item} />)
          } 
        </div>
    </>
  )
}

export default Products