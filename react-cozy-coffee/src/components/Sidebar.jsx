import { categories } from "../data/categories";
import Categorie from "./Categorie";

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img
          className="w-40"
          src="img/CozyCoffee/CozyCoffee_Logo.png"
          alt="Logo Cozy Coffee"
        />
      </div>
      <div className="mt-10">
        {categories.map((categorie) => (
          <Categorie key={categorie.id} categorie={categorie} />
        ))}
      </div>
      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600"
        >
          Cancel Order
        </button>
      </div>
    </aside>
  );
}
