import Card from "../components/Card";

const Courses = () => {

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

  return (
    <main>

      <section className="p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Our Courses
        </h1>

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

    </main>
  );
};

export default Courses;