import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import App from "../App";

export const EkartApi = createContext();

const ContextApi = () => {
  
  //! Get All Products
  let [ekartObj, setEkartObj] = useState({});
  let getApiData = async () => {
    try {
      let response = await fetch("http://localhost:5000/ekartApi/ekart");
      if(!response.ok){
        throw new Error("Server Error")
      }
      let respObj = await response.json();
      setEkartObj(respObj);
      // console.log(ekartObj)
    } catch (error) {
      console.log(`Server is not Started : ${error.message}`);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);


  //! Get Perticular products
  let [singleProduct , setSingleProduct] = useState({})
  let navigate = useNavigate()
  let handleViewMore = async (id) => {
    let apiResp = await fetch(`http://localhost:5000/ekartApi/ekart/${id}`)
    let res = await apiResp.json();
    setSingleProduct(res)
    navigate('/viewmore')
  }
  return (
    <>
    <EkartApi.Provider value={{ekartObj , handleViewMore , singleProduct}}>
        <App />
      </EkartApi.Provider>
    </>
  );
};

export default ContextApi;
