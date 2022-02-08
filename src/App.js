import { Routes, Route, NavLink } from "react-router-dom";
import AddProduct from "./commons/AddProduct";
import Products from "./commons/Products";
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route exact path="/products" element={<AddProduct />} />
        <Route exact path="/allproducts" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;

