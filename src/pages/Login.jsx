import { Alert, Button, Label, TextInput } from "flowbite-react";
import NavbarMain from "../components/Navbar/Navbar";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
      toast.success('Succesfully Signed In!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        });
    } catch (err) {
      setError(err);
      console.log(err.code);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn(auth, provider);
      navigate("/");
      toast.success('Succesfully Signed In!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        });
    } catch (err) {
      setError(err);
      console.log(err.message);
    }
  };

  return (
    <>
      <NavbarMain />
      <LoginContainer>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {error && <Alert color="failure">{error.message}</Alert>}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@email.com"
              required={true}
              shadow={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         
            <div className="p-1 box mt-0 text-center">
              <Link style={{ color: "purple" }} to="/reset-password">
                Reset Password ?
              </Link>
            </div>
         
          <Button color={'purple'} type="submit">Login</Button>
          <div className="p-4 box mt-3 text-center">
            Don't have an account?{" "}
            <Link style={{ color: "purple" }} to="/register">
              Sign up
            </Link>
          </div>
          <div className="flex justify-center">
            <GoogleButton
              onClick={handleGoogleSignIn}
              className="g-btn mt-2"
              type="light"
            />
          </div>
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: aliceblue;
`;
