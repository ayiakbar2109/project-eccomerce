import React, { useEffect } from "react";
import axios from "axios";
import {
  removeSelectedProduct,
  setProductsJewelery,
} from "./../../redux/actions/productsAction";
import { useSelector, useDispatch } from "react-redux";
import ProductsComponent from "../../components/ProductsComponent";

const JewelryIndex = () => {
  const getProductsJewelery = useSelector(
    (state) => state.allProducts.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProductsJewelery(response.data));
  };

  useEffect(() => {
    fetchProducts();
    dispatch(removeSelectedProduct());
  }, []);
  return <ProductsComponent />;
};

export default JewelryIndex;
