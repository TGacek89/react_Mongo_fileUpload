import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CameraBg from "../img/placeholder.jpg";
import axios from "axios";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
  margin-top: -16px;
`;

const Card = styled.div`
  padding-top: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
`;
const Img = styled.img`
  height: 220px;
  border-radius: 4px;
`;

const Get = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8880/products/");
        setProducts(response.data);
        console.log(response.data);
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
    <Container>
      {products.map((product) => (
        <Card key={product._id}>
          <span>
            <Img src={CameraBg} alt="" />
          </span>
          <span>
            <h4>{product.name}</h4>
            <p>Profit: $$$</p>
            <p>More...</p>
            <button onClick={() => handleDelete(product._id)}> DELEETEE</button>
          </span>
        </Card>
      ))}
    </Container>
  );
};

export default Get;
