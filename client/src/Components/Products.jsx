import React, { useContext } from 'react'
import { EkartApi } from '../API/ContextApi'

const Products = () => {
    const ekartObj = useContext(EkartApi) || {}
    // console.log(ekartObj)
    let products = ekartObj.payload || [];
    console.log(products)
    return (
        <div className="products">
            <h2>All Products</h2>
            <div className="container">
                {products.map((elem)=>{
                    let {_id , name , image} = elem;
                    return (
                        <div className="card">
                            <div className="image">
                                <img src={image} alt="" />
                            </div>
                            <div className="title">{name}</div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Products
