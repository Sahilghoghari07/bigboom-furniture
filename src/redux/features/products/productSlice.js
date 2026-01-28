import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const JSON_API = import.meta.env.VITE_JSON_API_PRODUCTS;

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

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }) => {
    const res = await axios.put(`${JSON_API}/${id}`, product);
    return res.data;
  },
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`${JSON_API}/${id}`);
    return id;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // add
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("Product added successfully.");
      })
      .addCase(addProduct.rejected, () => {
        toast.error("Failed to add product");
      })

      // update
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.items = state.items.map((p) =>
          p.id === action.payload.id ? action.payload : p,
        );
        toast.success("Product updated successfully");
      })
      .addCase(updateProduct.rejected, () => {
        toast.error("Failed to update product");
      })

      // delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
        toast.success("Product deleted successfully");
      })
      .addCase(deleteProduct.rejected, () => {
        toast.error("Failed to delete product");
      });
  },
});

export default productSlice.reducer;
