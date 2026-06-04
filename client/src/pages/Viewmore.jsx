import React, { useContext } from "react";
import { EkartApi } from "../API/ContextApi";

const Viewmore = () => {
  let { singleProduct } = useContext(EkartApi) || {};
  let oneProduct = singleProduct.payload || [];
  // console.log(oneProduct)
  let { _id, name, desc, quantity, price, category, image } = oneProduct;

  return (
    <>
      <div className="viewmore">
        <div className="card">
          <div className="left">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="title">{name}</div>
          </div>
          <div className="right">
            <div className="desc">
              <strong>Description:</strong> {desc}
            </div>

            <div className="cate">Category: {category}</div>

            <div className="quant">Stock: {quantity}</div>

            <div className="price">₹{price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewmore;
