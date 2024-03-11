import useSWR from "swr";
import clientAxios from "../config/axios";
import Product from "../components/Product";

export default function Products() {
  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () =>
    clientAxios("/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((details) => details.data);
  const { data, error, isLoading } = useSWR("/api/products", fetcher, {
    refreshInterval: 10000,
  });
  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Products</h1>
      <p className="text-2xl my-10">Manage the products from here.</p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.data.map((product) => (
          <Product
            key={product.image}
            product={product}
            buttonAvailable={true}
          />
        ))}
      </div>
    </div>
  );
}
