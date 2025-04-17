import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false); // to track modal visibility
  const navigate = useNavigate();

  // Function to get user info from local storage
  const getUserInfo = () => {
    const isExistUser = localStorage.getItem("username");
    if (isExistUser) {
      setUserInfo(isExistUser);
      console.log("User info:", isExistUser);
    } else {
      localStorage.clear();
      navigate("/login");
    }
  };

  // Logout function
  const logout = () => {
    setShowModal(true);
  };

  // Confirm logout
  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Clear username from local storage
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
