import { products } from "../data/products";
import Product from "../components/Product";
import useCozyCoffee from "../hooks/useCozyCoffee";

export default function Home() {
  const { currentCategorie } = useCozyCoffee();
  return (
    <>
      <h1 className="text-4xl font-black">{currentCategorie.name}</h1>
      <p className="text-2xl my-10">Select and customize your order below.</p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.image} product={product} />
        ))}
      </div>
    </>
  );
}
