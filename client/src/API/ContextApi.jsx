import React, { createContext, useEffect, useState } from "react";
import App from "../App";

export const EkartApi = createContext();

const ContextApi = () => {
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
  return (
    <>
      <EkartApi.Provider value={ekartObj}>
        <App />
      </EkartApi.Provider>
    </>
  );
};

export default ContextApi;
