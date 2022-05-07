import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductData } from '../Data/ProductData';
const SingleProduct = () => {
    const navigate = useNavigate();
    const url = useParams();
    console.log(url.id);
  return (
    <>
        <div className="container">
            <p  className='fs-5' onClick={()=>navigate('/products')} >Back</p>
        </div>
        {
            ProductData.map(item =>
                    (item.id === Number(url.id ))? <div className="container d-flex">
                    <img className='m-4 shadow' src={item.img} alt="" style={{width: 250,height:200}} />
                    <div className='m-4'>
                        <h3>{item.name}</h3>
                        <p>{item.size}</p>
                        <h4>&#8377; {item.prize}</h4>
                        <button className='btn btn-primary rounded-pill shadow-lg'>Add to cart </button>
                    </div>
                </div> : <></>
                )
        }
        
    </>
  )
}

export default SingleProduct