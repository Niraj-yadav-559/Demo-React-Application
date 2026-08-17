import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Slices/authSlice";
import { useEffect } from "react";

function ReduxTest() {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    console.log("Redux Auth State:", {
      user,
      isAuthenticated,
    });
  }, [user, isAuthenticated]);

  const handleLogin = () => {
    dispatch(
      login({
        id: 1,
        name: "Niraj",
        email: "niraj@example.com",
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ReduxTest;