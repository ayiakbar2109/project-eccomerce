import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductsComponent = () => {
  const getProduct = useSelector((state) => state.allProducts.products);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const renderList = getProduct.map((product, index) => {
    return (
      <Link
        key={index}
        to={`/${product.category}/${product.id}`}
        className="border-solid border-1 border-r-gray-200 py-11 px-7"
      >
        <div className="flex items-center justify-center w-full h-4/6 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-auto w-5/6 object-center group-hover:opacity-75"
          />
        </div>
        <article>
          <h3 className="mt-4 text-md font-medium text-gray-900 overflow-hidden max-h-11 leading-5 text-ellipsis text-center">
            {product.title}
          </h3>
          <div className="flex flex-col gap-1 items-center mt-3 ">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((stars) => (
                <StarIcon
                  key={stars}
                  className={classNames(
                    product.rating?.rate > stars
                      ? "text-yellow-400"
                      : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                />
              ))}
            </div>
            <Typography
              variant="paragraph"
              className="text-gray-400 font-medium text-center"
            >
              {product.rating?.count} reviews
            </Typography>
          </div>
          <p className="mt-2 mb-3 lg:mb-0 text-lg font-medium text-gray-900 text-center">
            ${product.price}
          </p>
        </article>
      </Link>
    );
  });
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid border-t-gray-200 border-l-gray-200 border-b-gray-200 border-solid border-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderList}
        </div>
      </div>
    </section>
  );
};

export default ProductsComponent;
