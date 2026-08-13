function Footer({ footerLinks }) {
  return (
    <footer className="bg-gray-800 text-white text-center p-6">

      <h2 className="text-xl font-bold">
        ReactLearn
      </h2>

      <p className="mt-2">
        Learn React by building projects.
      </p>

      <div className="flex justify-center gap-6 mt-4">

        {footerLinks.map((item) => {
          return (
            <a
              key={item.id}
              href={item.link}
            >
              {item.name}
            </a>
          );
        })}

      </div>

      <p className="mt-4 text-gray-400">
        © 2026 ReactLearn
      </p>

    </footer>
  );
}

export default Footer;