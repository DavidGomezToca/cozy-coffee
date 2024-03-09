import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import clientAxios from "../config/axios";

const CozyCoffeeContext = createContext();
const CozyCoffeeProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.cantity + total,
      0
    );
    setTotal(newTotal);
  }, [order]);
  const getCategories = async () => {
    try {
      const { data } = await clientAxios("/api/categories");
      setCategories(data.data);
      setCurrentCategory(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  const handleClickCategory = (id) => {
    const category = categories.filter((category) => category.id === id)[0];
    setCurrentCategory(category);
  };
  const handleClickModal = () => {
    setModal(!modal);
  };
  const handleSetProduct = (product) => {
    setProduct(product);
  };
  const handleAddOrder = ({ category_id, ...product }) => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const orderUpdate = order.map((orderState) =>
        orderState.id === product.id ? product : orderState
      );
      setOrder(orderUpdate);
      toast.success("Updated successfully");
    } else {
      setOrder([...order, product]);
      toast.success("Added to order");
    }
  };
  const handleEditCantity = (id) => {
    const productUpdate = order.filter((product) => product.id === id)[0];
    setProduct(productUpdate);
    setModal(!modal);
  };
  const handleDeleteOrderItem = (id) => {
    const orderUpdate = order.filter((product) => product.id !== id);
    setOrder(orderUpdate);
    toast.success("Deleted: " + product.name);
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
        order,
        handleAddOrder,
        handleEditCantity,
        handleDeleteOrderItem,
        total,
      }}
    >
      {children}
    </CozyCoffeeContext.Provider>
  );
};

export { CozyCoffeeProvider };
export default CozyCoffeeContext;
