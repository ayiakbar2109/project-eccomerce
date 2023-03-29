import React, { useEffect } from "react";
import axios from "axios";
import { setProductElectronics } from "./../../redux/actions/productsAction";
import { useSelector, useDispatch } from "react-redux";

import ElectronicComponent from "./ElectronicComponent";

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
  }, []);

  return <ElectronicComponent />;
};

export default ElectronicsIndex;
