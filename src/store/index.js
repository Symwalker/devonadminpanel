import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./products";


export const store = configureStore({
    reducer : {
      products : ProductSlice,
    }
})