import { useState } from "react";

function UserForm() {

  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <section className="p-8">

      <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-md">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Tell Us Your Name
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          className="border p-3 w-full mt-5 rounded"
        />

        {name && (
          <p className="text-center mt-4 text-blue-600 font-semibold">
            Welcome, {name}! 👋
          </p>
        )}

      </div>

    </section>
  );
}

export default UserForm;