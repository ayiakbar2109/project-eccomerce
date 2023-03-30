import React, { useEffect } from "react";
import axios from "axios";
import {
  removeSelectedProduct,
  setProductsMensClothing,
} from "./../../redux/actions/productsAction";
import { useSelector, useDispatch } from "react-redux";
import ProductsComponent from "../../components/ProductsComponent";

const MensClothingIndex = () => {
  const getProductsMensClothing = useSelector(
    (state) => state.allProducts.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProductsMensClothing(response.data));
  };

  useEffect(() => {
    fetchProducts();
    dispatch(removeSelectedProduct());
  }, []);
  return <ProductsComponent />;
};

export default MensClothingIndex;
