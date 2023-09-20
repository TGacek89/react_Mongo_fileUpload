import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Header from "./Header";
import Add from "./Add";
import Navbar from "./Navbar";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
  margin-top: -16px;
  margin-left: 8px;
`;

const Img = styled.img`
  height: 240px;
  width: 360px;
  background-color: rgba(255, 255, 255, 0.05);
  object-fit: contain;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
const Card = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;

  &:hover ${Img} {
    transition: 0.5s;
    border: 1px white;
    box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.5);
  }
`;

const Get = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8880/products/");
        setProducts(response.data);
      } catch (error) {
        console.log("No data fetched!", error);
      }
    };
    getAllProducts();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8880/products/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Add />
      <Container>
        {products.map((product) => (
          <Card key={product._id}>
            <span>
              <Link className="link" to={`./${product._id}`}>
                <Img src={product.photo} alt="" />
              </Link>
            </span>
            <span>
              <h2>{product.name}</h2>
              <p style={{ marginTop: "-10px" }}>Profit: {product.profit}</p>
              <Link to={`./edit/${product._id}`}>
                <ModeEditIcon
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginTop: "60px",
                  }}
                />
              </Link>

              <DeleteOutlineOutlinedIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginTop: "60px",
                }}
                onClick={() => handleDelete(product._id)}
              />
            </span>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Get;
