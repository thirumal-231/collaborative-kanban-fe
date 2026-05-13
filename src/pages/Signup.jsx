import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useSignup } from "../hooks/useSignup";
import toast from "react-hot-toast";
import { useUser } from "../hooks/useUser";

export default function Signup() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  const { mutate: signupUser } = useSignup();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    signupUser(data, {
      onSuccess: (res) => {
        console.log(res);
        toast.success(res.message);
        navigate("/login", { replace: true });
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md border border-gray-200">
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Logo />
            <h1 className="text-2xl font-semibold text-gray-800">Tru Kanban</h1>
          </div>
          <p className="text-gray-600 text-sm font-medium">
            Sign up to continue
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            handleSignup(e);
          }}
          method="POST"
        >
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
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
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            By signing up, I accept the{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and acknowledge the{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white py-2 rounded-md font-medium transition"
          >
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-sm text-gray-500">
          Or continue with:
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          {["Google", "Apple"].map((provider) => (
            <button
              key={provider}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-700">{provider}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <NavLink to="/login">
          <p className="text-sm text-center text-blue-600 mt-6 cursor-pointer hover:underline">
            Already have an account? Log in
          </p>
        </NavLink>

        {/* Bottom Branding */}
        <div className="mt-8 text-center border-t pt-4">
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
