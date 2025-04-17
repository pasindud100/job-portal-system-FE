import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstancs";

function Home() {
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false); // to track modal visibility
  const navigate = useNavigate();

  // for get user info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  // Logout
  const logout = () => {
    setShowModal(true);
  };

  // confirm logout
  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    setUserInfo(null);
    setShowModal(false);
    navigate("/login");
  };

  // Cancel logout
  const handleLogoutCancel = () => {
    setShowModal(false); // Close the modal without logging out
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <Navbar userInfo={userInfo} logout={logout} />

      {/* Logout Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-medium text-gray-800">
              Are you sure you want to log out?
            </h3>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleLogoutCancel}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 duration-200"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
