import React from "react";
import CameraBg from "../img/camera.jpg";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  position: revert-layer;
  font-size: 14px;

  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 15px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Add = () => {
  return (
    <Container>
      <Img src={CameraBg} />
    </Container>
  );
};

export default Add;
