import React from "react";
import Logo from "../components/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function Login() {
  const { mutate: loginUser } = useLogin();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    loginUser(data, {
      onSuccess: () => {
        toast.success("Login successful");
        queryClient.invalidateQueries(["user"]);
        navigate("/dashboard", { replace: true });
      },
      onError: (err) => {
        console.log(err.response?.data?.message || "Login failed!");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Logo />
            <h1 className="text-2xl font-semibold text-gray-800">Tru Kanban</h1>
          </div>
          <p className="text-gray-700 text-sm font-medium">
            Log in to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-blue-600" />
            <span>Remember me</span>
            <span className="text-xs bg-purple-500 text-white rounded-full px-1.5">
              i
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white py-2 rounded-md font-medium transition"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-sm text-gray-500 my-6">
          Or login with:
        </div>

        {/* Passkey */}
        <button className="w-full border border-gray-300 py-2 rounded-md mb-4 hover:bg-gray-50 transition">
          🔑 Passkey
        </button>

        {/* OAuth */}
        <div className="space-y-3">
          {["Google", "Microsoft", "Apple"].map((provider) => (
            <button
              key={provider}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-700">{provider}</span>
            </button>
          ))}
        </div>

        {/* Links */}
        <div className="text-center mt-6 text-sm">
          <span className="text-blue-600 cursor-pointer hover:underline">
            Can't log in?
          </span>
          {" · "}
          <NavLink to="/signup">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Don't have an account? Sign up
            </span>
          </NavLink>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-gray-400 text-sm font-semibold">Tru Studios</p>
          <p className="text-xs text-gray-400 mt-1">
            One account to rule them all
          </p>
          <div className="text-xs text-blue-600 mt-2 space-x-2">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="cursor-pointer hover:underline">User Notice</span>
          </div>
        </div>
      </div>

      {/* Bottom Left Image */}
      <img
        src="/images/login_page_1.png"
        alt="left decoration"
        className="fixed bottom-0 left-0 w-0 md:w-80 opacity-90 pointer-events-none select-none"
      />

      {/* Bottom Right Image */}
      <img
        src="/images/login_page_2.png"
        alt="right decoration"
        className="fixed bottom-0 right-0 w-0 md:w-80 opacity-90 pointer-events-none select-none"
      />
    </div>
  );
}
