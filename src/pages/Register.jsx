import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import NavbarMain from "../components/Navbar/Navbar";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    try{
      await signUp(email, password)
      navigate('/')
      toast.success('Succesfully Registered!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        });
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <>
      <NavbarMain />
      <RegisterContainer>
      
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
        {error && <Alert color="failure">{error}</Alert>}
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox required={true} id="agree" />
            <Label htmlFor="agree">
              I agree with the{" "}
              <a
                href="/"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button color={'purple'} type="submit">Register new account</Button>
          <div className="p-4 box mt-3 text-center">
        Already have an account? <Link style={{color: 'purple'}} to="/login">Log In</Link>
      </div>
        </form>
      </RegisterContainer>
    </>
  );
};

export default Register;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: aliceblue;
`;
