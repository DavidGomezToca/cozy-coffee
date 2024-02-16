import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories";

const CozyCoffeeContext = createContext();
const CozyCoffeeProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoriesDB);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const handleClickCategory = (id) => {
    const category = categories.filter((category) => category.id === id)[0];
    setCurrentCategory(category);
  };
  return (
    <CozyCoffeeContext.Provider
      value={{ categories, currentCategory, handleClickCategory }}
    >
      {children}
    </CozyCoffeeContext.Provider>
  );
};

export { CozyCoffeeProvider };
export default CozyCoffeeContext;
