import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../auth/firebase";
import NavbarMain from "../components/Navbar/Navbar";
import { useAuth } from "../context/AuthContext";

const PasswordReset = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const { passwordReset } = useAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await passwordReset(auth, email);
      setError('Success')
    } catch (err) {
      setError(err);
      console.log(err);
    }
    setEmail("");
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  };

  return (
    <>
      <NavbarMain />
      <ResetContainer>
        <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
          {error && error !== 'Success' ? <Alert color="failure">{error.message}</Alert> : null}
          {error === 'Success' ? (
            <Alert color="success">Password reset email sent</Alert>
          ) : null}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email2"
                value="Enter Your Email to Reset Password"
              />
            </div>
            <TextInput
              value={email}
              id="email2"
              type="email"
              placeholder="name@email.com"
              required={true}
              shadow={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button color={'purple'} type="submit">Send Reset Email</Button>
          <div className="flex justify-center"></div>
        </form>
      </ResetContainer>
    </>
  );
};

export default PasswordReset;

const ResetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: aliceblue;
`;
