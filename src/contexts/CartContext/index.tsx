import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { iDefaultProviderProps } from "../@types";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iProduct } from "../CartContext/@types";

import React from 'react'
export const ProductContext = createContext({} as iProductContext);

interface iProductContext {
  productList: iProduct[];
}

const ProductProvider = ({children}: iDefaultProviderProps) => {

  const [productList, setProductList] = useState<iProduct[]>([])
  const token = localStorage.getItem("@TOKEN")

  useEffect(() => {
    
    if(token){
      (async() => {
        try {
          const response = await api.get<iProduct[]>("/products", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
          setProductList(response.data)
          console.log(response)
        } catch (error) {
          console.log("error");       
        }
    })();
    }
  
  }, [])

  return (
    <ProductContext.Provider value={{ productList }}>
    {children}
  </ProductContext.Provider>
  )
}

export default ProductProvider




