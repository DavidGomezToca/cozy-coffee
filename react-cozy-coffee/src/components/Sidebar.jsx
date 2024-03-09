import Category from "./Category";
import useCozyCoffee from "../hooks/useCozyCoffee";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { categories } = useCozyCoffee();
  const { logout, user } = useAuth({ middleware: "auth" });

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img
          className="w-40"
          src="img/CozyCoffee/CozyCoffee_Logo.png"
          alt="Logo Cozy Coffee"
        />
      </div>
      <p className="my-10 text-xl text-center">Hi: {user?.name}</p>
      <div className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600"
          onClick={logout}
        >
          Cancel Order
        </button>
      </div>
    </aside>
  );
}
