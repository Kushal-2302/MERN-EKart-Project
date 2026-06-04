import React, { useContext, useState } from "react";
import { EkartApi } from "../API/ContextApi";

const Products = () => {
  const { ekartObj, handleViewMore } = useContext(EkartApi) || {};
  // console.log(ekartObj)
  // console.log(handleViewMore)

  let products = ekartObj.payload || [];
  // console.log(products)

  //! handle Button
  const [counts, setCounts] = useState({});

  const increase = (id) => {
    setCounts({
      ...counts,
      [id]: (counts[id] || 0) + 1,
    });
  };

  const decrease = (id) => {
    if ((counts[id] || 0) > 1) {
      setCounts({
        ...counts,
        [id]: counts[id] - 1,
      });
    } else {
      const updatedCounts = { ...counts };
      delete updatedCounts[id];
      setCounts(updatedCounts);
    }
  };
  return (
    <div className="products">
      <h2>All Products</h2>
      <div className="container">
        {products.map((elem, index) => {
          let { _id, name, image } = elem;
          return (
            <div className="card" key={index}>
              <div className="image">
                <img src={image} alt="" onClick={() => handleViewMore(_id)} />
              </div>
              <div className="title">{name}</div>
              <div className="box">
                {(counts[_id] || 0) === 0 ? (
                  <button className="add-btn" onClick={() => increase(_id)}>
                    Add
                  </button>
                ) : (
                  <div className="counter">
                    <button onClick={() => decrease(_id)}>-</button>
                    <span>{counts[_id]}</span>
                    <button onClick={() => increase(_id)}>+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
