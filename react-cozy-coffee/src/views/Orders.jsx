import useSWR from "swr";
import useCozyCoffee from "../hooks/useCozyCoffee";
import clientAxios from "../config/axios";
import { formatPrice } from "../helpers";

export default function Orders() {
  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () =>
    clientAxios("/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  const { data, error, isLoading } = useSWR("/api/orders", fetcher, {
    refreshInterval: 1000,
  });
  const { handleClickCompleteOrder } = useCozyCoffee();
  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Orders</h1>
      <p className="text-2xl my-10">Manage the orders from here.</p>
      <div className="grid grid-cols-2 gap-5">
        {data.data.data.map((order) => (
          <div
            key={order.id}
            className="p-5 bg-white shadow space-y-2 border-b"
          >
            <p className="text-xl font-bold text-slate-600">
              Content of order nº{order.id}
            </p>
            {order.products.map((product) => (
              <div
                key={product.id}
                className="border-b border-b-slate-200 last-of-type:border-none py-4"
              >
                <p className="text-sm">ID: {product.id}</p>
                <p>{product.name}</p>
                <p>
                  Cantity: {""}
                  <span className="font-bold">{product.pivot.cantity}</span>
                </p>
              </div>
            ))}
            <p className="text-lg font-bold text-slate-600">
              Client: {""}
              <span className="font-normal">{order.user.name}</span>
            </p>
            <p className="text-lg font-bold text-amber-600">
              Total price: {""}
              <span className="font-normal text-slate-600">
                {formatPrice(order.total)}
              </span>
            </p>
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
              onClick={() => handleClickCompleteOrder(order.id)}
            >
              Complete Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
