import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const validEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validEmail(email)) {
      setError("Invalid email. Please enter a correct Email.");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data) {
        // Store token and role directly in local storage
        localStorage.setItem("jwtToken", response.data.accessToken); // Store the JWT token
        localStorage.setItem("userRole", response.data.role);
        localStorage.setItem("username", response.data.username);

        console.log("User  Role:", response.data.role); // Log the user role to check its value
        console.log("User Token:", response.data.accessToken);
        console.log("User Name:", response.data.username);

        if (response.data.role === "ROLE_TRAINER") {
          navigate("/trainer"); // Redirect to trainer dashboard
        }
        if (response.data.role === "ROLE_EMPLOYER") {
          navigate("/employer"); // Redirect to employer dashboard
        }
        if (response.data.role === "ROLE_ADMIN") {
          navigate("/admin");
        }
        if (response.data.role === "ROLE_VISITOR") {
          navigate("/");
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 duration-200 w-96 border border-gray-300 rounded-lg p-10">
          <form onSubmit={handleLogin}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-2xl text-gray-900 dark:text-white">
                  LOGIN
                </h1>
              </div>
              <div>
                <Link to="/">
                  <IoCloseOutline className="text-2xl cursor-pointer dark:text-white" />
                </Link>
              </div>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="">
              <input
                placeholder="Password"
                className="input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isShowPassword ? "text" : "password"}
              />
              <div className="flex justify-end relative top-[-50px] right-2">
                {isShowPassword ? (
                  <FaEye
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                )}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm pb-2">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-500 underline">
                Sign up now!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
