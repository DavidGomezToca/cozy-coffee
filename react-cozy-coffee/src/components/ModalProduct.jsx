import { useState, useEffect } from "react";
import useCozyCoffee from "../hooks/useCozyCoffee";
import { formatPrice } from "../helpers";

export default function ModalProduct() {
  const { product, handleClickModal, order, handleAddOrder } = useCozyCoffee();
  const [cantity, setCantity] = useState(1);
  const [edition, setEdition] = useState(false);
  useEffect(() => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const productEdition = order.filter(
        (orderState) => orderState.id === product.id
      )[0];
      setCantity(productEdition.cantity);
      setEdition(true);
    }
  }, [order]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`img/Products/${product.image}.jpg`}
          alt={`Image product ${product.name}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5"> {product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatPrice(product.price)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantity <= 1) {
                return;
              } else {
                setCantity(cantity - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <p className="text-3xl">{cantity}</p>
          <button
            type="button"
            onClick={() => {
              if (cantity >= 5) {
                return;
              } else {
                setCantity(cantity + 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => {
            handleAddOrder({ ...product, cantity });
            handleClickModal();
          }}
        >
          {edition ? "Apply changes" : "Add to order"}
        </button>
      </div>
    </div>
  );
}
