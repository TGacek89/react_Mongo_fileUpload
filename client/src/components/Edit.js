import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  position: relative;
  height: 100vh;
  color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 60vh;
  background: ${({ theme }) => theme.form};
  color: gray;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const Input = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, 0.2);
  color: rgb(187, 21, 21);
  outline: none;
`;
const Button = styled.button`
  border: 1px solid rgb(187, 21, 21);
  background: rgba(21, 21, 21);
  font-size: 18px;
  color: rgb(187, 21, 21);
  margin-top: 50px;
  padding: 10px 50px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: rgba(20, 20, 20, 0.8);
    padding: 10px 80px;
  }
`;

const Edit = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    buyPrice: "",
    estimatedSellPrice: "",
    sellPrice: "",
    profit: "",
    pfoto: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const buyPrice = parseFloat(product.buyPrice);
    const sellPrice = parseFloat(product.sellPrice);

    if (!isNaN(buyPrice) && !isNaN(sellPrice)) {
      const fee = sellPrice * 0.115;
      const calculatedProfit = sellPrice - buyPrice - fee;
      setProduct((prev) => ({ ...prev, profit: calculatedProfit.toFixed(2) }));
    }
  }, [product.buyPrice, product.sellPrice]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8880/products/${params.id}`, product);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Form>
          <h1>Add New Item</h1>
          <Input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="name"
          />
          <Input
            type="text"
            placeholder="description"
            onChange={handleChange}
            name="description"
          />
          <Input
            type="number"
            placeholder="buyPrice"
            onChange={handleChange}
            name="buyPrice"
          />
          <Input
            type="number"
            placeholder="estimatedSellPrice"
            onChange={handleChange}
            name="estimatedSellPrice"
          />
          <Input
            type="number"
            placeholder="sellPrice"
            onChange={handleChange}
            name="sellPrice"
          />
          <Input
            type="number"
            placeholder="profit"
            value={product.profit}
            readOnly
          />
          <Input
            type="text"
            placeholder="photo"
            onChange={handleChange}
            name="photo"
          />
          <Button className="addBook" onClick={handleUpdate}>
            ADD
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Edit;
