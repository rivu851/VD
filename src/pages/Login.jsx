import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../context/AppContext"; // import context
function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const {user , setUser , howUserLogin, setShowUserLogin} = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        loginInfo,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      localStorage.setItem("token", data.token);
      setUser(data.token);  
       
      toast.success("Login Successful!");
      navigate("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-500 to-gray-500 z-10">
      <div className="bg-gray-300 p-8 rounded-2xl shadow-2xl w-96 relative">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">Voyager</h1>
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Don't have an account yet?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-800 mb-4"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-800 mb-4"
            placeholder="Password"
          />
          <p className="text-right text-blue-600 text-sm mb-4 cursor-pointer hover:underline">Forgot Password?</p>
          <button
            type="submit"
            className={`w-full py-2 rounded-full transition text-white text-lg font-semibold ${loading ? "bg-gray-500" : "bg-black hover:bg-gray-800"}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
export default Login;

