import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "./../redux/actions/productsAction";
import { Link } from "react-router-dom";
import {
  StarIcon,
  CheckIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Typography, Button, Breadcrumbs } from "@material-tailwind/react";
import LoadingAnimation from "./LoadingAnimation";

const ProductDetails = () => {
  const { productId } = useParams();
  const productDetails = useSelector((state) => state.product);
  // const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <main className="bg-white">
      <div className="pt-6">
        {Object.keys(productDetails).length === 0 ? (
          <LoadingAnimation />
        ) : (
          <div className="border-gray-200 border-2 mx-2 p-5">
            <Breadcrumbs className="p-0 m-0">
              <Link
                to={`/${productDetails.category}`}
                className="capitalize font-medium text-gray-500 text-lg"
              >
                {productDetails.category}
              </Link>
            </Breadcrumbs>

            {/* Product Title */}
            <div className="mt-4">
              <Typography variant="h3" className="font-bold text-gray-800">
                {productDetails.title}
              </Typography>
            </div>

            {/* Product Price and Star Reviews */}
            <div className="flex gap-4 mt-3 border-r-gray-400 items-center">
              <Typography variant="lead" className="font-medium">
                ${productDetails.price}
              </Typography>
              <div className="flex gap-2 items-center ">
                <StarIcon className="h-4 w-4" />
                <Typography variant="paragraph">
                  {productDetails.rating.count} reviews
                </Typography>
              </div>
            </div>

            {/* Product Description */}

            <article className="mt-4">
              <Typography
                variant="paragraph"
                className="text-lg font-medium text-gray-500 tracking-wide"
              >
                {productDetails.description}
              </Typography>
              <div className="flex gap-3 mt-5 items-center">
                <CheckIcon className="h-5 w-5 text-green-400" />
                <span className="text-gray-500">
                  In stock and ready to ship
                </span>
              </div>
            </article>

            {/* Images Gallery */}
            <div className="flex justify-center mt-12 w-full h-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={productDetails.image}
                alt={productDetails.title}
                className="h-auto w-3/4 object-contain"
              />
            </div>

            <div className="mt-9">
              {/* Button add to cart */}
              <Button
                variant="filled"
                className="flex text-gray-900 mt-6 font-bold items-center text-lg gap-3 bg-gray-200 w-full justify-center py-3"
              >
                <ShoppingCartIcon strokeWidth={1} className="h-6 w-6" /> Add to
                Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
