import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";
import { useState } from "react";

function Header({ navLinks }) {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    // Clear Redux authentication state
    dispatch(logout());

    // Show logout popup
    setShowLogoutPopup(true);

    // Hide popup after 2.5 seconds
    setTimeout(() => {
      setShowLogoutPopup(false);
    }, 2500);
  };

  return (
    <header className="bg-blue-600 text-white p-4 relative">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          ReactLearn
        </Link>


        {/* Navigation */}
        <nav className="flex gap-6">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-blue-200"
            >
              {link.title}
            </Link>
          ))}

        </nav>


        {/* Authentication Section */}

        {isAuthenticated ? (

          <div className="flex items-center gap-3">

            {/* User Name */}
            <span className="font-medium">
              Hi, {user?.name}
            </span>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
            >
              Logout
            </button>

          </div>

        ) : (

          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Login
          </Link>

        )}

      </div>


      {/* Logout Success Popup */}

      {showLogoutPopup && (

        <div className="fixed top-6 right-6 z-50 flex items-center gap-4 bg-white shadow-xl border border-gray-200 rounded-xl px-5 py-4">

          {/* Blue Checkmark */}

          <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center">

            <span className="text-white text-2xl font-bold">
              ✓
            </span>

          </div>


          {/* Message */}

          <div>

            <h3 className="font-bold text-gray-800">
              User Logged Out
            </h3>

            <p className="text-sm text-gray-500">
              You have been successfully logged out.
            </p>

          </div>

        </div>

      )}

    </header>
  );
}

export default Header;