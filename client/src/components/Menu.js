import React from "react";
import styled from "styled-components";
import Ebay from "../img/x.png";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
  border-radius: 8px;
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
  height: 100px;
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
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={Ebay} />
        </Logo>
        <Link to="/" className="link">
          <Item>
            <WeekendOutlinedIcon />
            Home
          </Item>
        </Link>
        <Item>
          <AddOutlinedIcon />
          Products
        </Item>

        <Item>
          <PaidOutlinedIcon />
          Profits
        </Item>
        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          <Brightness6OutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
