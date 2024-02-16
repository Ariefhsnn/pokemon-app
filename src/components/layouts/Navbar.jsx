import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    return navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between py-4 px-10 text-primary-100 border-b-2 border-b-secondary-100 shadow-md bg-primary-500">
      <h1 className="text-white font-semibold text-lg capitalize"> {title} </h1>
      <button onClick={handleLogout} className="hover:text-white duration-300">
        Logout
      </button>
    </nav>
  );
}
