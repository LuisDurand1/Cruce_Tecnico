import { Routes, Route } from "react-router-dom";
import AddProduct from "./commons/AddProduct";
import Products from "./commons/Products";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(error));
  }, []);

  console.log(products, "APP PRODUCTS");

  return (
    
        <div class="card_img">
          <img src="/port.png" alt="portada" class="img"></img>
        </div>
  );
}

export default App;
{
  /*  <Routes>
<Route exact path="/products" element={<AddProduct/>}/>
  <Route exact path="/allproducts" element= {<Products/> }/>

    </Routes> */
}
