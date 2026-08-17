// import Card from "../components/Card";

// const Courses = () => {

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

//   return (
//     <main>

//       <section className="p-8">

//         <h1 className="text-3xl font-bold text-center mb-8">
//           Our Courses
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {courses.map((course) => (
//             <Card
//               key={course.id}
//               title={course.title}
//               description={course.description}
//             />
//           ))}

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Courses;

import React from "react";

const courses = [
  { id: 1, title: "React JS", icon: "⚛️", level: "Beginner → Advanced", duration: "8 Weeks", description: "Master React from fundamentals to advanced concepts and build modern reusable interfaces.", topics: ["JSX", "Components", "Props & State", "Hooks", "Router", "Redux"] },
  { id: 2, title: "JavaScript", icon: "🟨", level: "Beginner → Advanced", duration: "7 Weeks", description: "Build a strong JavaScript foundation and learn concepts used in modern web applications.", topics: ["ES6+", "Functions", "DOM", "Async/Await", "APIs"] },
  { id: 3, title: "Node.js", icon: "🟢", level: "Intermediate", duration: "6 Weeks", description: "Learn backend development with Node.js and create scalable REST APIs.", topics: ["Node.js", "Express", "REST APIs", "Authentication", "npm"] },
  { id: 4, title: "HTML & CSS", icon: "🎨", level: "Beginner", duration: "4 Weeks", description: "Create clean, responsive and professional web interfaces from the ground up.", topics: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"] },
  { id: 5, title: "Python", icon: "🐍", level: "Beginner → Advanced", duration: "8 Weeks", description: "Learn Python programming, OOP and practical application development.", topics: ["Python Basics", "OOP", "Files", "Modules", "APIs"] },
  { id: 6, title: "FastAPI", icon: "⚡", level: "Intermediate", duration: "5 Weeks", description: "Build fast modern Python APIs with validation, authentication and databases.", topics: ["REST APIs", "Pydantic", "SQLAlchemy", "Authentication", "CRUD"] },
  { id: 7, title: "PostgreSQL", icon: "🗄️", level: "Intermediate", duration: "4 Weeks", description: "Learn relational databases, SQL queries and database design for real applications.", topics: ["SQL", "CRUD", "Joins", "Relationships", "Database Design"] },
  { id: 8, title: "Docker", icon: "🐳", level: "Intermediate", duration: "3 Weeks", description: "Understand containers and package applications for consistent development and deployment.", topics: ["Images", "Containers", "Networks", "Volumes", "Compose"] },
  { id: 9, title: "Git & GitHub", icon: "🔀", level: "Beginner", duration: "2 Weeks", description: "Learn professional version control and collaborate confidently on development projects.", topics: ["Git", "Branches", "Merge", "Pull Requests", "GitHub"] },
];

function Courses() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
            ReactLearn Academy
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Explore Our Courses
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Learn practical development skills, build real projects and grow
            from beginner to confident developer.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Learning Path
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Choose what you want to learn
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Explore practical courses covering frontend, backend, databases,
              DevOps and developer tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400" />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl shadow-lg">
                      {course.icon}
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Course Topics
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-slate-500">
                      ⏱ {course.duration}
                    </span>
                    <button
                      type="button"
                      className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition group-hover:bg-blue-700"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courses;