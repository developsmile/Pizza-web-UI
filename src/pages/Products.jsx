import React from 'react'
import {Card} from '../components/Card'
import {ProductData} from '../Data/ProductData'
const Products = () => {
  return (
    <>
        <div className="container p-2">
            <p className='fs-4 ml-3'>Products</p>
        </div>
        <div className="container d-flex flex-wrap">
          {
            ProductData.map(item=> <Card key={item.id} item={item} />)
          }
            
        </div>
    </>
  )
}

export default Products