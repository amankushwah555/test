import React, { useEffect, useState } from "react";
import axios from "axios";

function Task(props) {
  const [productsData, setProductsData] = useState();
  const [filterEdProduct, setFilteredProduct] = useState("");
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    const url = "https://dummyjson.com/products";
    axios
      .get(url)
      .then((res) => {
        setProductsData(res.data?.products);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleSearchProducts = (e) => {
    e.preventDefault();
    console.log(productsData);
    productsData.map((item) => {
      console.log(item);
      if (item) {
        const url = `https://dummyjson.com/products/${item.id}`;
        axios
          .get(url)
          .then((res) => {
            setProductInfo(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSearchProducts}>
        <input
          placeholder="Search a Product...."
          type="text"
          value={filterEdProduct}
          onChange={(e) => {
            setFilteredProduct(e.target.value.toLowerCase());
            const filteredData = productsData.filter((item) =>
              item.title.toLowerCase().includes(filterEdProduct)
            );
            setProductsData(filteredData);
          }}
        />
        <button type="submit">Search Product</button>
        {productsData?.length > 0 &&
          productsData.map((item) => {
            return <p>{item?.title}</p>;
          })}
      </form>
      <p>Product Info</p>
      <p>Product Name: </p>
      <p>{productInfo?.title ? productInfo?.title : "N/A"}</p>
      <p>Product Price</p>
      <p> {productInfo?.price ? productInfo?.price : "N/A"}</p>
    </div>
  );
}

export default Task;
