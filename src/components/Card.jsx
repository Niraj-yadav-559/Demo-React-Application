function Card({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">

      <h2 className="text-xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Learn More
      </button>

    </div>
  );
}

export default Card;