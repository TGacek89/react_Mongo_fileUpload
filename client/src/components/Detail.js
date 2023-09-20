import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Detail = () => {
  let { id } = useParams();
  console.log({ id });
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8880/products/`);
        const productData = await response.data.find(
          (product) => product._id === id
        );

        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <img className="imgDetail" src={product.photo} alt="" />
          <h3>{product.name}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
