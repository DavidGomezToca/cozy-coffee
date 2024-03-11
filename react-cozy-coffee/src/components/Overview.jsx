import { formatPrice } from "../helpers";
import useCozyCoffee from "../hooks/useCozyCoffee";
import { useAuth } from "../hooks/useAuth";
import OverviewProduct from "./OverviewProduct";

export default function Overview() {
  const { order, total, handleSubmitNewOrder } = useCozyCoffee();
  const { logout } = useAuth({});
  const checkOrder = () => order.length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitNewOrder(logout);
  };

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">My Order</h1>
      <p className="text-lg my-5">Here you can see your order.</p>
      <div className="py-10">
        {order.length === 0 ? (
          <p className="text-center text-2xl">Your order is empty.</p>
        ) : (
          order.map((product) => (
            <OverviewProduct key={product.id} product={product} />
          ))
        )}
      </div>
      <p className="text-xl mt-10">
        Total: {""}
        {formatPrice(total)}
      </p>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrder()
                ? "bg-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-800"
            } px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
            value="Send Order"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </aside>
  );
}
