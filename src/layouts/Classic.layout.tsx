import { Link, Outlet } from "react-router-dom";
import LoggedAs from "../components/LoggedAs.component";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Links: LinkProps[] = [
  { to: "/", children: "Home" },
  { to: "/about", children: "About" },
  { to: "/contact", children: "Contact" },
];

const ClassicLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-wide">FairPick</div>
          <nav>
            <ul className="flex space-x-6">
              {Links.map((link, index) => (
                <li key={index} className="flex items-center justify-center">
                  <Link to={link.to} className="hover:underline">
                    {link.children}
                  </Link>
                </li>
              ))}
              <li>
                <LoggedAs />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          FairPick - {currentYear}
        </div>
      </footer>
    </div>
  );
};

export default ClassicLayout;
