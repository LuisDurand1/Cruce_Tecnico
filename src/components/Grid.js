import axios from "axios";
import { useState, useEffect } from "react";
import Item from "../commons/Item";

const Grid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="product-section">
      {products.map((product, id) => {
        return <Item key={id} item={product} />;
      })}

      <div className="card__container" id="fake_container">
        <div className="card__img__container">
          <div id="card__img__fake" className="card__img"></div>
        </div>

        <div className="card__data__container" id="card__fake__container">
          <div
            className="card__descri                
               ption"
          >
            <div id="div-funko">&nbsp;</div>
          </div>

          <div className="card_empty">
            <div id="div-funko1">&nbsp;</div>

            <div>
              <div id="div-funko2">&nbsp;</div>
            </div>
          </div>
          <div
            className="card__descri                
               ption"
          >
            <div id="div-funko3">&nbsp;</div>
          </div>
        </div>
        <button className="buttonfake"></button>
      </div>
    </section>
  );
};

export default Grid;
