import React from "react";
import styled from "styled-components";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: ${({ theme }) => theme.gradient};
  height: 200px;
  margin-left: 8px;
`;

const Add = () => {
  return (
    <Container>
      <Link to="/create" className="link">
        <AddAPhotoIcon style={{ color: "white", fontSize: 60, padding: 20 }} />
      </Link>
    </Container>
  );
};

export default Add;
