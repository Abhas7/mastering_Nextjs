"use client"
import { useSearchParams } from "next/navigation"


const ProductList = () => {

   const searchParam =  useSearchParams();
   console.log("inside", searchParam);
   
  return (


    <>
    <h1>client</h1>



    </>
  )
}

export default ProductList