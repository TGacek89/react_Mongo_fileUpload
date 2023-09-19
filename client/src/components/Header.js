import React from "react";
import CameraBg from "../img/camera.jpg";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  z-index: 0;
  top: 0;
`;

const Img = styled.img`
  width: 100%;
  z-index: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: -50px;
`;

const Header = () => {
  return (
    <Container>
      <Img src={CameraBg} />
    </Container>
  );
};

export default Header;
