import { Link } from "react-router-dom"; 

function Header({ navLinks }) {
  return (
    <header className="bg-blue-600 text-white p-4">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          ReactLearn
        </h1>

        <nav className="flex gap-6">

          {/* {navLinks.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
              >
                {item.name}
              </a>
            );
          })} */}

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
            >
              {link.title}
            </Link>
          ))}

        </nav>

        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          Login
        </button>

      </div>

    </header>
  );
}

export default Header;