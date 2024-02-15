import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories";

const CozyCoffeeContext = createContext();
const CozyCoffeeProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoriesDB);
  const [currentCategorie, setCurrentCategorie] = useState(categories[0]);
  const handleClickCategorie = () => {
    console.log("Click on to Categorie");
  };
  return (
    <CozyCoffeeContext.Provider
      value={{ categories, currentCategorie, handleClickCategorie }}
    >
      {children}
    </CozyCoffeeContext.Provider>
  );
};

export { CozyCoffeeProvider };
export default CozyCoffeeContext;
