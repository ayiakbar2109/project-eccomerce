import React, { useEffect } from "react";
import axios from "axios";
import {
  removeSelectedProduct,
  setProductElectronics,
} from "./../../redux/actions/productsAction";
import { useSelector, useDispatch } from "react-redux";
import ProductsComponent from "../../components/ProductsComponent";

const ElectronicsIndex = () => {
  const getProductsElectronics = useSelector(
    (state) => state.allProducts.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProductElectronics(response.data));
  };

  useEffect(() => {
    fetchProducts();
    dispatch(removeSelectedProduct());
  }, []);

  return <ProductsComponent />;
};

export default ElectronicsIndex;
