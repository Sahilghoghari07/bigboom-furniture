import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const JSON_API = "http://localhost:5000/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(JSON_API);
    return res.data;
  },
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const res = await axios.post(JSON_API, product);
    return res.data;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default productSlice.reducer;
