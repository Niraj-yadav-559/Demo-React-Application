import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginUser } from "../Redux/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Call FastAPI login API
      const data = await loginUser(formData);

      console.log("Login Response:", data);

      // Store user in Redux
      dispatch(
        login({
          id: data.id,
          name: data.name,
          email: data.email,
        })
      );

      // Show success popup
      setShowPopup(true);

      // Navigate after popup appears
      setTimeout(() => {
        navigate("/courses");
      }, 1500);

    } catch (err) {
      console.error("Login Error:", err);

      setError(err.message || "Invalid email or password");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">

      {/* Login Success Popup */}
      {showPopup && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-4 bg-white shadow-xl border border-gray-200 rounded-xl px-5 py-4">

          <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              ✓
            </span>
          </div>

          <div>
            <h3 className="font-bold text-gray-800">
              Login Successful
            </h3>

            <p className="text-sm text-gray-500">
              Welcome back, {formData.email}
            </p>
          </div>

        </div>
      )}

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome back to ReactLearn
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mt-5">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">

          <div className="mb-4">

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="mb-6">

            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;