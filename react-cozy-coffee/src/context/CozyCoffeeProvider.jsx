import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories";

const CozyCoffeeContext = createContext();
const CozyCoffeeProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoriesDB);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const handleClickCategory = (id) => {
    const category = categories.filter((category) => category.id === id)[0];
    setCurrentCategory(category);
  };
  const handleClickModal = (id) => {
    setModal(!modal);
  };
  const handleSetProduct = (product) => {
    setProduct(product);
  };

  return (
    <CozyCoffeeContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        modal,
        handleClickModal,
        product,
        handleSetProduct,
      }}
    >
      {children}
    </CozyCoffeeContext.Provider>
  );
};

export { CozyCoffeeProvider };
export default CozyCoffeeContext;
