import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <section className="p-8 text-center">

      <h2 className="text-3xl font-bold text-gray-800">
        Interactive Learning
      </h2>

      <div className="bg-white max-w-md mx-auto mt-6 p-6 rounded-lg shadow-md">

        <h3 className="text-xl font-bold">
          Lessons Completed
        </h3>

        <p className="text-4xl font-bold text-blue-600 my-6">
          {count}
        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={decrease}
            className="bg-gray-600 text-white px-5 py-2 rounded"
          >
            -
          </button>

          <button
            onClick={increase}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            +
          </button>

        </div>

      </div>

    </section>
  );
}

export default Counter;