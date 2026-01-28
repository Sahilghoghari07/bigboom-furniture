import React, { useEffect, useMemo } from "react";
import Cards from "../../components/admin/Cards";
import { GoPackage } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchProducts } from "../../redux/features/products/productSlice";
import { Link } from "react-router-dom";

function Dashboard() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // ======= Analytics Data ===========
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const lowStock = products.filter((p) => p.status === "Low stock").length;
    const outStock = products.filter((p) => p.status === "Out of stock").length;
    const inStock = products.filter((p) => p.status === "In stock").length;

    return { totalProducts, lowStock, outStock, inStock };
  }, [products]);

  // Bar chart data (Top products by quantity)
  const barData = useMemo(() => {
    return products.map((p) => ({
      name: p.pname,
      qty: p.qty,
    }));
  }, [products]);

  // Pie chart data (Stock distribution)
  const pieData = [
    { name: "In Stock", value: stats.inStock },
    { name: "Low Stock", value: stats.lowStock },
    { name: "Out Stock", value: stats.outStock },
  ];

  // Line chart (price trend demo)
  const lineData = useMemo(() => {
    return products.map((p) => ({
      name: p.pname,
      price: p.price,
    }));
  }, [products]);

  const COLORS = ["#22c55e", "#facc15", "#ef4444"];

  return (
    <div className="w-full ms-[18%] mt-14 px-6">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-gray-500">Welcome back, Admin 👋</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <Link to={"/admin/products"}>
          <Cards
            icon={<GoPackage />}
            iconBg="bg-gray-200"
            iconColor="text-gray-600"
            title="Total Products"
            value={stats.totalProducts}
          />
        </Link>
        <Link to={"/admin/users"}>
          <Cards
            icon={<FaUsers />}
            iconBg="bg-green-200"
            iconColor="text-green-600"
            title="Total Users"
            value="0"
          />{" "}
        </Link>
      </div>

      {/* Charts section */}
      <div className="grid gap-8 mb-12">
        {/* bar chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-gray-700 mb-4">Product Quantity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="qty" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-gray-700 mb-4">
            Stock Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="font-semibold text-gray-700 mb-4">Price Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#ff6900"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
