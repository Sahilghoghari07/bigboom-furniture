import React, { useEffect, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GoPackage } from "react-icons/go";
import { IoIosWarning } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from "../../components/PrimaryButton";
import Cards from "../../components/admin/Cards";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../redux/features/products/productSlice";

function Products() {
  const [pname, setPname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("In stock");
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [mode, setMode] = useState("edit");

  const { items: products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //  ============== Submit handler ==============
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!pname.trim() || !qty || !price) {
      alert("All fields are required");
      return;
    }

    if (mode === "edit") {
      dispatch(
        updateProduct({
          id: editId,
          product: {
            pname: pname.trim(),
            qty: Number(qty),
            price: Number(price),
            status,
          },
        }),
      );
    } else {
      dispatch(
        addProduct({
          pname: pname.trim(),
          qty: Number(qty),
          price: Number(price),
          status,
        }),
      );
    }

    // reset
    setPname("");
    setQty("");
    setPrice("");
    setStatus("In stock");
    setIsOpen(false);
  };

  // ========= Auto Status ============
  useEffect(() => {
    if (qty === "") return;

    if (Number(qty) === 0) setStatus("Out of stock");
    else if (Number(qty) <= 5) setStatus("Low stock");
    else setStatus("In stock");
  }, [qty]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ======== Dashboard Counts ==========
  const stats = useMemo(() => {
    return {
      total: products.length,
      lowStock: products.filter((p) => p.status === "Low stock").length,
      outStock: products.filter((p) => p.status === "Out of stock").length,
    };
  }, [products]);

  return (
    <div className="w-full ms-[18%] mt-14 p-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6">
        <Cards
          icon={<GoPackage />}
          iconBg="bg-gray-200"
          iconColor="text-gray-600"
          title="Total Products"
          value={stats.total}
        />
        <Cards
          icon={<IoIosWarning />}
          iconBg="bg-yellow-100"
          iconColor="text-yellow-600"
          title="Low Stock"
          value={stats.lowStock}
        />
        <Cards
          icon={<AiFillCloseCircle />}
          iconBg="bg-red-100"
          iconColor="text-red-600"
          title="Out Of Stock"
          value={stats.outStock}
        />
      </div>

      {/* Button for add */}
      <PrimaryButton
        type="button"
        text="+ Add"
        className="mt-6"
        onClick={() => {
          setMode("add"); // reset mode
          setEditId(null); // reset id
          setPname("");
          setQty("");
          setPrice("");
          setStatus("In stock");
          setIsOpen(true);
        }}
      />

      {/* Product Form */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-1/3 shadow-xl mx-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-5 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            <h2 className="text-xl font-bold mb-4">
              {editId ? "Update Product" : "Add Product"}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="pname" className="block text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  name="pname"
                  id="pname"
                  placeholder="Enter Name"
                  value={pname}
                  onChange={(e) => setPname(e.target.value)}
                  className="w-full border border-black/80 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/50"
                />
              </div>
              <div>
                <label htmlFor="qty" className="block text-sm font-medium">
                  Qty
                </label>
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  min="0"
                  placeholder="Enter Quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-full border border-black/80 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/50"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter Price"
                  min="1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border border-black/80 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/50"
                />
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium">
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={status}
                  disabled
                  className="w-full border border-black/80 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/50"
                >
                  <option value="In stock">In stock</option>
                  <option value="Low stock">Low stock</option>
                  <option value="Out of stock">Out of stock</option>
                </select>
              </div>

              <SecondaryButton
                type="submit"
                text={loading ? "Saving..." : editId ? "Update" : "Save"}
                className="w-full"
              />
            </form>
          </div>
        </div>
      )}

      {/* Product List */}
      <div className="p-6 bg-white my-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-700">Product List</h2>

        {loading && <p className="text-gray-500 py-4">Loading products...</p>}

        <div className="overflow-x-auto py-4">
          <table className="min-w-full text-left text-sm rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="font-semibold text-gray-600">
                <th className="px-6 py-3">Product ID</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {products.map((p) => (
                <tr className="hover:bg-gray-50 transition" key={p.id}>
                  <td className="px-6 py-4">#{p.id}</td>
                  <td className="px-6 py-4">{p.pname}</td>
                  <td className="px-6 py-4">{p.qty}</td>
                  <td className="px-6 py-4">{p.price}/-</td>
                  <td className="px-6 py-4">
                    <span
                      className={`${p.status === "Out of stock" ? "bg-red-100 text-red-700" : p.status === "Low stock" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"} px-3 py-1 rounded-full text-xs`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      title="Update"
                      onClick={() => {
                        setMode("edit");
                        setEditId(p.id); // edit mode ON
                        setPname(p.pname); // prefill form
                        setQty(p.qty);
                        setPrice(p.price);
                        setStatus(p.status);
                        setIsOpen(true); // open modal
                      }}
                      className="text-xl p-2 bg-amber-200 mx-0.5 rounded-full cursor-pointer hover:scale-105 hover:bg-amber-300 transition-all"
                    >
                      <FiEdit />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => dispatch(deleteProduct(p.id))}
                      className="text-xl p-2 bg-red-200 mx-0.5 rounded-full cursor-pointer hover:scale-105 hover:bg-red-300 transition-all"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}

              {!loading && products.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
