import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ROLE_ADMIN");
  const [error, setError] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        role,
      });

      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed!");
      alert("failed to register");
    }
  };

  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 duration-200 w-96 border border-gray-300 rounded-lg p-10">
          <form onSubmit={handleRegister}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-2xl text-gray-900 dark:text-white">
                  Register
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
              placeholder="name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                placeholder="Password"
                className="input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isShowPassword ? "text" : "password"}
                required
              />
              <div className="absolute right-2 top-3 cursor-pointer">
                {isShowPassword ? (
                  <FaEye size={20} onClick={() => setIsShowPassword(false)} />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => setIsShowPassword(true)}
                  />
                )}
              </div>
            </div>
            <select
              className="input-box"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="ROLE_ADMIN">Admin</option>
              <option value="ROLE_EMPLOYER">Employer</option>
              <option value="ROLE_TRAINER">Trainer</option>
              <option value="ROLE_VISITOR">Visitor</option>
            </select>

            {error && <p className="text-red-500 text-sm pb-2">{error}</p>}

            <button type="submit" className="btn-primary">
              Register
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Sign In!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
