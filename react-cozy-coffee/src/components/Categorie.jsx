import useCozyCoffee from "../hooks/useCozyCoffee";

export default function Categorie({ categorie }) {
  const { handleClickCategorie } = useCozyCoffee();
  const { icon, id, name } = categorie;
  return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
      <img
        src={`/img/Products/Icons/Icon_${icon}.png`}
        alt="Categorie Icon"
        className="w-12"
      />
      <button
        className="text-lg font-bold cursor-pointer truncate"
        type="button"
        onClick={handleClickCategorie}
      >
        {name}
      </button>
    </div>
  );
}
