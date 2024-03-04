import useCozyCoffee from "../hooks/useCozyCoffee";

export default function Category({ category }) {
  const { handleClickCategory, currentCategory } = useCozyCoffee();
  const { icon, id, name } = category;
  const higlightCurrentCategory = () =>
    currentCategory.id === id ? "bg-amber-500" : "bg-white hover:bg-amber-400";

  return (
    <div
      className={`${higlightCurrentCategory()} cursor-pointer flex items-center gap-4 border w-full p-3`}
      onClick={() => handleClickCategory(id)}
    >
      <img
        src={`/img/Products/Icons/Icon_${icon}.png`}
        alt="Category Icon"
        className="w-12"
      />
      <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
    </div>
  );
}
