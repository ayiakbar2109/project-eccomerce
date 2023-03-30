import React, { useEffect } from "react";
import axios from "axios";
import { setProductsWomensClothing } from "./../../redux/actions/productsAction";
import { useSelector, useDispatch } from "react-redux";
import ProductsComponent from "../../components/ProductsComponent";

const WomensClothingIndex = () => {
  const getProductsWomensClothing = useSelector(
    (state) => state.allProducts.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProductsWomensClothing(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductsComponent />;
};

export default WomensClothingIndex;
