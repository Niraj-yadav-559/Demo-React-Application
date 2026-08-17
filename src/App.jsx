// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Card from "./components/Card";
// import Footer from "./components/Footer";
// import Counter from "./components/Counter";
// import UserForm from "./components/UserForm";
// import TaskManager from "./components/TaskManager";
// import UserList from "./components/UserList";

// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Courses from "./pages/Courses";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// import ReduxTest from "./Redux/ReduxTest";

// function App() {

//   // Navigation links
//   const navLinks = [
//     {
//       id: 1,
//       title: "Home",
//       path: "/"
//     },
//     {
//       id: 2,
//       title: "Courses",
//       path: "/courses"
//     },
//     {
//       id: 3,
//       title: "About",
//       path: "/about"
//     },
//     {
//       id: 4,
//       title: "Users",
//       path: "/users"
//     },
//     {
//       id: 5,
//       title: "Contact",
//       path: "/contact"
//     },
    
// ];

//   // Courses data
//   const courses = [
//     {
//       id: 1,
//       title: "React JS",
//       description: "Learn React fundamentals to advanced"
//     },
//     {
//       id: 2,
//       title: "JavaScript",
//       description: "Learn JavaScript from scratch to advanced"
//     },
//     {
//       id: 3,
//       title: "Node JS",
//       description: "Learn backend development with Node.js"
//     }
//   ];

//   // Footer links
//   const FooterLink = [
//     {
//       id: 1,
//       name: "Home",
//       link: "/"
//     },
//     {
//       id: 2,
//       name: "Courses",
//       link: "/courses"
//     },
//     {
//       id: 3,
//       name: "About",
//       link: "/about"
//     },
//     {
//       id: 4,
//       name: "Users",
//       link: "/users"
//     },
//     {
//       id: 5,
//       name: "Contact",
//       link: "/contact"
//     }
//   ];

//   return (
//     <BrowserRouter>

//       <div className="bg-gray-100 min-h-screen">

//         {/* Header */}
//         <Header navLinks={navLinks} />

//         {/* Routes */}
//         <Routes>

//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <main>

//                 {/* Welcome Section */}
//                 <section
//                   id="home"
//                   className="text-center p-10"
//                 >
//                   <h1 className="text-4xl font-bold text-gray-800">
//                     Welcome to ReactLearn
//                   </h1>

//                   <p className="mt-4 text-gray-600">
//                     Learn React by building real projects.
//                   </p>

//                   <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded">
//                     Get Started
//                   </button>
//                 </section>

//                 {/* Courses */}
//                 <section
//                   id="courses"
//                   className="p-8"
//                 >

//                   <h2 className="text-3xl font-bold text-center mb-8">
//                     Our Courses
//                   </h2>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//                     {courses.map((course) => (
//                       <Card
//                         key={course.id}
//                         title={course.title}
//                         description={course.description}
//                       />
//                     ))}

//                   </div>

//                 </section>

//                 {/* Counter */}
//                 <Counter />

//                 {/* User Form */}
//                 <UserForm />

//                 {/* Task Manager */}
//                 <TaskManager />

//                 <ReduxTest />



//               </main>
//             }
//           />

//           {/* About Page */}
//           <Route
//             path="/about"
//             element={<About />}
//           />

//           {/* Courses Page */}
//           <Route
//             path="/courses"
//             element={<Courses />}
//           />

//           {/* Users Page */}
//           <Route
//             path="/users"
//             element={<UserList />}
//           />

//           {/* Contact Page */}
//           <Route
//             path="/contact"
//             element={<Contact />}
//           />

//           <Route
//             path="/login"
//             element={<Login />}
//           />

//           <Route
//             path="/signup"
//             element={<Signup />}
//           />

//         </Routes>

//         {/* Footer */}
//         <Footer footerLinks={FooterLink} />

//       </div>

//     </BrowserRouter>
//   );
// }

// export default App;


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
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ReduxTest from "./Redux/ReduxTest";

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
    },
    
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

      <div className="min-h-screen bg-slate-950 text-slate-900 selection:bg-cyan-200 selection:text-slate-950">

        {/* Header */}
        <Header navLinks={navLinks} />

        {/* Routes */}
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <main className="bg-slate-50">
                {/* Hero */}
                <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 px-6 py-20 md:px-12 lg:px-20">
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        Learn • Build • Deploy
                      </span>
                      <h1 className="mt-6 max-w-3xl text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                        Welcome to <span className="text-cyan-300">ReactLearn</span>
                      </h1>
                      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        Learn React by building real projects, mastering modern frontend concepts, and turning your ideas into polished applications.
                      </p>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#courses" className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300">Explore Courses →</a>
                        <a href="/about" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15">Learn More</a>
                      </div>
                      <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
                        <div><p className="text-2xl font-bold text-white">3+</p><p>Core courses</p></div>
                        <div><p className="text-2xl font-bold text-white">100%</p><p>Project focused</p></div>
                        <div><p className="text-2xl font-bold text-white">∞</p><p>Practice & growth</p></div>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                        <div className="rounded-2xl bg-slate-900/90 p-6">
                          <div className="mb-6 flex items-center justify-between">
                            <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" /></div>
                            <span className="text-xs text-slate-500">ReactLearn.jsx</span>
                          </div>
                          <div className="space-y-3 font-mono text-sm">
                            <p className="text-cyan-300">const <span className="text-white">learn</span> = <span className="text-amber-300">{'{'}</span></p>
                            <p className="pl-5 text-slate-300">build: <span className="text-emerald-300">"real projects"</span>,</p>
                            <p className="pl-5 text-slate-300">skills: <span className="text-emerald-300">"React + JS"</span>,</p>
                            <p className="pl-5 text-slate-300">future: <span className="text-emerald-300">"full stack"</span></p>
                            <p className="text-amber-300">{'}'}</p>
                            <p className="pt-3 text-cyan-300">learn<span className="text-white">.start()</span> <span className="text-slate-500">// your journey</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Courses */}
                <section id="courses" className="px-6 py-20 md:px-12 lg:px-20">
                  <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                      <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Start learning</span>
                      <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Build skills that matter</h2>
                      <p className="mx-auto mt-4 max-w-2xl text-slate-600">Follow a practical learning path from frontend fundamentals to backend development.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                      {courses.map((course, index) => (
                        <div key={course.id} className="group rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl">
                          <div className="rounded-xl bg-gradient-to-br from-slate-50 to-white p-6">
                            <div className="mb-5 flex items-center justify-between">
                              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 font-bold text-cyan-300">0{index + 1}</span>
                              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Beginner → Advanced</span>
                            </div>
                            <Card key={course.id} title={course.title} description={course.description} />
                            <div className="mt-5 text-sm font-semibold text-blue-600 transition group-hover:text-cyan-600">View course →</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Counter */}
                <Counter />

                {/* User Form */}
                <UserForm />

                {/* Task Manager */}
                <TaskManager />

                <ReduxTest />



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

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

        </Routes>

        {/* Footer */}
        <Footer footerLinks={FooterLink} />

      </div>

    </BrowserRouter>
  );
}

export default App;