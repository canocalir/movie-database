import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavbarMain = () => {
  return (
    <Navbar fluid={false} rounded={true}>
      <NavLink to={"/"}>
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movie App
          </span>
        </Navbar.Brand>
      </NavLink>
      <div className="flex md:order-1">
        <NavLink className={"pr-2"} to={"/register"}>
          <Button>Register</Button>
        </NavLink>
        <NavLink className={"pr-3"} to={"/login"}>
          <Button>Login</Button>
        </NavLink>
        {/* <Dropdown
          className={"pr-5"}
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        ></Dropdown> */}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <NavLink
          className={
            "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          }
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink
          className={
            "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          }
          to={"/about"}
        >
          About
        </NavLink>

        <NavLink
          className={
            "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          }
          to={"#"}
          onClick={() => (window.location = "mailto:yourmail@domain.com")}
        >
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMain;
