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
  const { image, title, price, category, description, rating } = productDetails;
  const dispatch = useDispatch();

  // GET API DATA
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  // Render Data
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  // This is for change color on reviews stars
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <main className="bg-white">
      <div className="">
        {Object.keys(productDetails).length === 0 ? (
          <LoadingAnimation />
        ) : (
          <div className="mx-2 p-6">
            <Breadcrumbs className="p-0 m-0">
              <Link
                to={`/${category}`}
                className="capitalize font-light text-gray-900 text-lg"
              >
                {category}
              </Link>
            </Breadcrumbs>

            <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-4">
              <section className="lg:row-span-1">
                {/* Product Title */}
                <div className="mt-4">
                  <Typography variant="h3" className="font-bold text-gray-900">
                    {title}
                  </Typography>
                </div>

                {/* Product Price and Star Reviews */}
                <div className="flex gap-4 mt-3 border-r-black items-center">
                  <Typography variant="lead" className="font-normal">
                    ${price}
                  </Typography>
                  <span className="text-gray-300"> |</span>
                  <div className="flex gap-2 items-center ">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((stars) => (
                        <StarIcon
                          key={stars}
                          className={classNames(
                            rating?.rate > stars
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <Typography
                      variant="paragraph"
                      className="text-gray-400 font-medium"
                    >
                      {rating?.count} reviews
                    </Typography>
                  </div>
                </div>

                {/* Product Description */}

                <article className="mt-4">
                  <Typography
                    variant="paragraph"
                    className="text-md font-normal text-gray-600 tracking-normal"
                  >
                    {description}
                  </Typography>
                  <div className="flex gap-3 mt-5 items-center">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                    <span className="text-gray-500">
                      In stock and ready to ship
                    </span>
                  </div>
                </article>
              </section>

              {/* Images Gallery */}
              <div className="flex justify-center mt-12 w-full h-full overflow-hidden px-24 lg:m-0 rounded-lg lg:items-start lg:row-span-2 lg:col-start-2 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={image}
                  alt={title}
                  className="h-auto w-3/4 object-contain"
                />
              </div>

              <div className="mt-9 lg:mt-0 lg:row-start-2 lg:col-start-1">
                {/* Button add to cart */}
                <Button
                  variant="filled"
                  className="flex text-gray-900 mt-6 font-bold items-center text-lg gap-3 bg-gray-200 w-full justify-center py-3 shadow-gray-400"
                >
                  <ShoppingCartIcon strokeWidth={1} className="h-6 w-6" /> Add
                  to Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
