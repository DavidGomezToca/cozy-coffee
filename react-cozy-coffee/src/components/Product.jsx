import { formatPrice } from "../helpers";
import useCozyCoffee from "../hooks/useCozyCoffee";

export default function Product({
  product,
  buttonAdd = false,
  buttonAvailable = false,
}) {
  const { handleClickModal, handleSetProduct, handleClickProductOutOfStock } =
    useCozyCoffee();
  const { name, image, price } = product;

  return (
    <div className="border p-3 shadow bg-white">
      <img
        src={`/img/Products/${image}.jpg`}
        className="w-full"
        alt={`${name}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatPrice(price)}
        </p>
        {buttonAdd && (
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() => {
              handleClickModal();
              handleSetProduct(product);
            }}
          >
            Add
          </button>
        )}
        {buttonAvailable && (
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() => handleClickProductOutOfStock(product.id)}
          >
            Out Of Stock
          </button>
        )}
      </div>
    </div>
  );
}
