import { IconButton, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  remove,
} from "../../redux/actions/addToCartAction";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const CartIndex = () => {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((total, item) => {
    const hasil = total + item.price * item.quantity;
    const round = parseFloat(Math.round(hasil).toFixed(2));
    return round;
  }, 0);

  const renderItemCart = cartItems.map((item, index) => {
    return (
      <section
        key={index}
        className="flex px-4 py-6 border-b-1 justify-between gap-5 lg:gap-12"
      >
        <img src={item.image} className="w-16" />

        <div>
          <Typography className="text-gray-500 font-bold w-52 lg:w-72">
            {item.title}
          </Typography>
        </div>

        <div className="">
          <div className="flex flex-row items-center gap-3">
            <IconButton
              variant="outline"
              className="bg-gray-200 w-5 h-5"
              onClick={() => {
                if (item.quantity > 1) {
                  return dispatch(decreaseQty(item));
                } else {
                  return dispatch(remove(item));
                }
              }}
            >
              <MinusIcon className="w-4 h-4 text-gray-900" />
            </IconButton>
            <Typography variant="h6" className="text-gray-700">
              {item.quantity}
            </Typography>

            <IconButton
              variant="outline"
              className="bg-gray-200 w-5 h-5"
              onClick={() => dispatch(increaseQty(item))}
            >
              <PlusIcon className="w-4 h-4 text-gray-900" />
            </IconButton>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <Typography className="text-gray-500 font-bold">
            ${item.quantity * item.price}
          </Typography>
          <a
            role="button"
            variant="link"
            className="text-gray-700"
            onClick={() => dispatch(remove(item))}
          >
            Remove
          </a>
        </div>
      </section>
    );
  });

  const Subtotal = cartItems.length > 0 && (
    <section className="px-4 py-6 border-b-0">
      <div className="flex justify-between">
        <div>
          <Typography variant="h5">Subtotal</Typography>
          <Typography variant="paragraph">
            Shipping and taxes will be calculated at checkout
          </Typography>
        </div>
        <div>
          <Typography variant="h5">${total}</Typography>
        </div>
      </div>

      <Button
        variant=""
        className="bg-gray-300 text-gray-900 w-full mt-6 text-md"
      >
        Checkout
      </Button>
    </section>
  );

  return (
    <main className="flex flex-col items-center justify-center">
      <Typography variant="h2" className="text-gray-900 mt-12">
        Shopping Cart
      </Typography>

      <div className="border-solid border-t-1 border-x-0 border-b-0 mt-12">
        {renderItemCart}
        {Subtotal}
      </div>
    </main>
  );
};

export default CartIndex;
