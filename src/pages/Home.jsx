import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import TaskManager from "../components/TaskManager";

const Home = () => {
  return (
    <main>

      {/* Welcome Section */}
      <section
        id="home"
        className="text-center p-10"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to ReactLearn
        </h1>

        <p className="mt-4 text-gray-600">
          Learn React by building real projects.
        </p>

        <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded">
          Get Started
        </button>
      </section>

      {/* React Practice */}
      <Counter />

      <UserForm />

      <TaskManager />

    </main>
  );
};

export default Home;