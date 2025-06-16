import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </BrowserRouter>
  );
}
