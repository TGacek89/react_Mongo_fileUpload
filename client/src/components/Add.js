import React from "react";
import styled from "styled-components";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(rgba(51, 51, 255, 0.5), #181818);
  /* color: green; */
  height: 200px;
`;

const Add = () => {
  return (
    <Container>
      <Link to="/create">
        <AddAPhotoOutlinedIcon
          style={{ color: "white", fontSize: 60, padding: 20 }}
        />
      </Link>
    </Container>
  );
};

export default Add;
