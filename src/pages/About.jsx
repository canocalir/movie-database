import { Card } from "flowbite-react";
import NavbarMain from "../components/Navbar/Navbar";
import logo from "../assets/theater.jpg";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <NavbarMain />
      <MainContainer>
        <div className="max-w-sm">
          <Card imgSrc={logo}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Greatest Movie Database ever
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              IGMD is the greatest movie database you can ever find on the
              internet.
            </p>
          </Card>
        </div>
      </MainContainer>
    </>
  );
};

export default About;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: aliceblue;
`;
