import React from "react";
import styled from "styled-components";
import OfflineImage from "../../Assets/Images/images.png";
import { Button } from "../styles/Button";

const OfflineContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: "Poppins", sans-serif;
  margin-bottom: 16px;
`;

const Image = styled.img.attrs({
  alt: "x",
})``;

const OfflineScreen = () => {
  const BodyLoad = () => window.location.reload();

  return (
    <>
      <OfflineContainer>
        <Image src={OfflineImage} />
        <Text>No internet connection</Text>
        <Button onClick={BodyLoad} bg="#242560" shadow="#a3abed">
          Reload
        </Button>
      </OfflineContainer>
      ;
    </>
  );
};

export default OfflineScreen;
