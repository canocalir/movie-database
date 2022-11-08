import { Avatar, Button, Navbar } from "flowbite-react";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import gIcon from '../../assets/g.png'
import logo from '../../assets/chair.png'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NavbarMain = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const signOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
      toast.success('Succesfully Signed Out!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const notLoggedIn = (
    <>
      <NavLink className={"pr-2"} to={"/register"}>
        <Button color={'purple'}>Register</Button>
      </NavLink>
      <NavLink className={"pr-3"} to={"/login"}>
        <Button color={'purple'}>Login</Button>
      </NavLink>
    </>
  );

  return (
    <Navbar className="bg-gray-900 text-gray-200 shadow-lg navbar-light" fluid={false}>
      <NavbarBrand href={"/"}>
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          IGMD
        </span>
      </NavbarBrand>
      <div className="flex md:order-1">
        {!user ? (
          notLoggedIn
        ) : (
          <>
            <Avatar
              alt="User settings"
              img={gIcon}
              rounded={true}
              className={'mr-2'}
            />
            <NavLink className={"pr-3"}>
              <Button color={'purple'} onClick={signOutHandler}>Log Out</Button>
            </NavLink>
          </>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <NavLink
          className={
            "block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          }
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink
          className={
            "block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          }
          to={"/about"}
        >
          About
        </NavLink>

        <NavLink
          className={
            "block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
