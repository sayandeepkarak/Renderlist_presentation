import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import errorimage from "../../Assets/Images/error.png";

const PageArea = styled.div`
  width: 100%;
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.img.attrs({ alt: "" })`
  width: 8vw;
  opacity: 0.6;
`;

const LargeText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 7vw;
  color: #bfbfbf;
`;

export const MiniText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2vw;
  color: #7e7e7e;
`;

const Button = styled(Link)`
  margin-top: 20px;
  font-size: x-large;
  color: #7e7e7e;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const Error = () => {
  return (
    <PageArea>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Emoji src={errorimage} />
        <LargeText>Oops!</LargeText>
      </div>
      <MiniText> 404 Page Not Found</MiniText>
      <Button to="/">Back To Home</Button>
    </PageArea>
  );
};

export default Error;
