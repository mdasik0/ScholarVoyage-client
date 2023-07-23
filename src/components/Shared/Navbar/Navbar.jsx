import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navSection = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Colleges">Colleges</NavLink>
      </li>
      <li>
        <NavLink to="/Admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/MyCollege">My College</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:w-[1400px] mx-auto w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* navigation here */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-100 rounded-lg w-52"
            >
              {navSection}
            </ul>
          </div>
          <a className="normal-case font-bold text-xl">ScholarVoyage</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-6 text-lg font-semibold duration-500">
            {navSection}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
