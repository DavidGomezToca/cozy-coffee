export default function Categorie({ categorie }) {
  const { icon, id, name } = categorie;
  return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
      <img
        src={`/img/Products/Icons/Icon_${icon}.png`}
        alt="Categorie Icon"
        className="w-12"
      />
      <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
    </div>
  );
}
