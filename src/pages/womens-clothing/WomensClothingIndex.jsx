import React, { useEffect } from "react";
import axios from "axios";
import { setProductsWomensClothing } from "./../../redux/actions/productsAction";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {getProductsWomensClothing.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="flex items-center justify-center w-full h-4/6 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-auto w-4/5 object-center group-hover:opacity-75"
                />
              </div>
              <article>
                <h3 className="mt-4 text-sm text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap">
                  {product.title}
                </h3>
                <p className="mt-1 mb-3 text-lg font-medium text-gray-900">
                  $ {product.price}
                </p>
                <Button
                  variant="filled"
                  className="flex text-gray-800 font-normal items-center gap-3 bg-gray-200 w-full justify-center py-2"
                >
                  <ShoppingCartIcon strokeWidth={1} className="h-5 w-5" /> Add
                  to Cart
                </Button>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomensClothingIndex;