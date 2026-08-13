import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import TaskManager from "./components/TaskManager";
import UserList from "./components/UserList";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";

function App() {

  // Navigation links
  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/"
    },
    {
      id: 2,
      title: "Courses",
      path: "/courses"
    },
    {
      id: 3,
      title: "About",
      path: "/about"
    },
    {
      id: 4,
      title: "Users",
      path: "/users"
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact"
    }
  ];

  // Courses data
  const courses = [
    {
      id: 1,
      title: "React JS",
      description: "Learn React fundamentals to advanced"
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Learn JavaScript from scratch to advanced"
    },
    {
      id: 3,
      title: "Node JS",
      description: "Learn backend development with Node.js"
    }
  ];

  // Footer links
  const FooterLink = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "Courses",
      link: "/courses"
    },
    {
      id: 3,
      name: "About",
      link: "/about"
    },
    {
      id: 4,
      name: "Users",
      link: "/users"
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact"
    }
  ];

  return (
    <BrowserRouter>

      <div className="bg-gray-100 min-h-screen">

        {/* Header */}
        <Header navLinks={navLinks} />

        {/* Routes */}
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
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

                {/* Courses */}
                <section
                  id="courses"
                  className="p-8"
                >

                  <h2 className="text-3xl font-bold text-center mb-8">
                    Our Courses
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {courses.map((course) => (
                      <Card
                        key={course.id}
                        title={course.title}
                        description={course.description}
                      />
                    ))}

                  </div>

                </section>

                {/* Counter */}
                <Counter />

                {/* User Form */}
                <UserForm />

                {/* Task Manager */}
                <TaskManager />

              </main>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Courses Page */}
          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* Users Page */}
          <Route
            path="/users"
            element={<UserList />}
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        {/* Footer */}
        <Footer footerLinks={FooterLink} />

      </div>

    </BrowserRouter>
  );
}

export default App;