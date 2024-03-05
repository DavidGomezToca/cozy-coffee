import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import ModalProduct from "../components/ModalProduct";
import useCozyCoffee from "../hooks/useCozyCoffee";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Layout() {
  const { modal } = useCozyCoffee();

  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>
        <Overview />
      </div>
      <Modal isOpen={modal} style={customStyles}>
        <ModalProduct />
      </Modal>
      <ToastContainer />
    </>
  );
}
