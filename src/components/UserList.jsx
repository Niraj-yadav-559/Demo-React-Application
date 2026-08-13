import { useEffect, useRef, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Prevent duplicate API call
  const hasFetched = useRef(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If API is already called, don't call it again
    if (hasFetched.current) {
      return;
    }

    // Mark API as called
    hasFetched.current = true;

    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        User List
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-blue-600">
          Loading users...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-600">
          {error}
        </p>
      )}

      {/* Users */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {user.name}
              </h2>

              <p className="text-gray-600 mt-2">
                Username: {user.username}
              </p>

              <p className="text-gray-600">
                Email: {user.email}
              </p>

              <p className="text-gray-600">
                Phone: {user.phone}
              </p>

              <p className="text-gray-600">
                Website: {user.website}
              </p>
            </div>
          ))}

        </div>
      )}

    </main>
  );
};

export default UserList;