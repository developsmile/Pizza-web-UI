import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductData } from '../Data/ProductData';
import '../css/SingleProduct.css'
const SingleProduct = () => {
    const navigate = useNavigate();
    const url = useParams();
  return (
    <>
        <div className="back-button">
            <p  className='fs-5' onClick={()=>navigate('/products')} >Back</p>
        </div>
        {
            ProductData.map(item =>
                    (item.id === Number(url.id )) && <div className="single-product-container">
                    <img src={item.img} alt=""  />
                    <div className='single-product-desc'>
                        <h3>{item.name}</h3>
                        <p>{item.size}</p>
                        <h4>&#8377; {item.prize}</h4>
                        <button>Add to cart </button>
                    </div>
                </div>
                )
        }
        
    </>
  )
}

export default SingleProduct