import { createContext } from "react";

const CozyCoffeeContext = createContext();
const CozyCoffeeProvider = ({ children }) => {
  return (
    <CozyCoffeeContext.Provider value={{}}>
      {children}
    </CozyCoffeeContext.Provider>
  );
};

export { CozyCoffeeProvider };
export default CozyCoffeeContext;
