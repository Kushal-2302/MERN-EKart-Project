import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import App from "../App";

export const EkartApi = createContext();
export const AdminContext = createContext();

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
      console.log(ekartObj)
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

  //? search product through title
  //!Search Product through Title
  let handleSearchBar = async (e) => {
    let titlename = e.target.value;
    if(!titlename){
      getApiData()
      return;
    }
    let respApi = await fetch(`http://localhost:5000/ekartApi/ekart/name/${titlename}`)
    let res = await respApi.json()
    setEkartObj(res)
  }


  //! Delete single Product
  let handleDeleteOneProduct = async (id) => {
    let bool = window.confirm("Do you want to Delete this Product ...?")
    if(bool){
      try {
        let deleteResp = await fetch(`http://localhost:5000/ekartApi/ekart/${id}` , {
        method : "DELETE"
    })
    let deleteRespObj = await deleteResp.json()
    alert(deleteRespObj.message)
      } catch (error) {
        alert(error.message)
      }
    }else{
      alert('Product is not deleted')
    }
  }
  return (
    <>
    <EkartApi.Provider value={{ekartObj , handleViewMore , singleProduct , handleSearchBar}}>
        <AdminContext.Provider value={{handleDeleteOneProduct}}>
          <App/>
        </AdminContext.Provider>
      </EkartApi.Provider>
    </>
  );
};

export default ContextApi;
