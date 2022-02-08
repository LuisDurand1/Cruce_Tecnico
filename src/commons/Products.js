import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(error));
  }, [location]);

  const handleSumbit = (id, e) => {
    e.preventDefault();
    console.log(id, "AHORA SI?");
    axios.delete(`http://localhost:3001/api/products/${id}`);

    setProducts(products.filter((product) => product._id !== id));
  };

  const editToggle = (idProduct) => {
    setId(idProduct);
    products.map((product) => {
      if (product._id === idProduct) {
        setForm({
          ...form,
          name: product.name,
          price: product.price,
          image: product.image,
        });
      }
    });
    console.log(form);
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  $("#btnSave").on("click", function (e) {
    axios
      .put(`http://localhost:3001/api/products/${id}`, form)
      .then(() =>
        axios
          .get("http://localhost:3001/api/products")
          .then((res) => setProducts(res.data))
      )
      .catch((error) => console.log(error));

    $("#exampleModalCenter").modal("hide");
  });

  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <a class="navbar-brand" href="#">
          <img
            src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
            alt="logo"
          />
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Catalogo
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid mt-4">
        <div class="card">
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, id) => (
                  <tr key={id}>
                    <td>
                      <a href="form.html"> {product.name}</a>
                    </td>
                    <td> {product.price}</td>
                    <td class="text-right">
                      <a href="form.html" class="btn">
                        <i class="fa fa-eye"></i>
                      </a>
                      <button
                        type="button"
                        class="btn"
                        data-target="#exampleModalCenter"
                        data-toggle="modal"
                        onClick={() => editToggle(product._id)}
                      >
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button
                        type="button"
                        class="btn"
                        id={product._id}
                        onClick={(e) => handleSumbit(product._id, e)}
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MODAL EDIT */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="card">
                    <div class="card-body" style={{ alignSelf: "center" }}>
                      <form>
                        <div class="row">
                          <div class="">
                            <img
                              src="http://via.placeholder.com/150x150"
                              class="rounded"
                              style={{ marginLeft: "4em" }}
                            />

                            {/*   <img
                    src="http://via.placeholder.com/150x150"
                    class="rounded"
                  /> */}
                          </div>
                        </div>
                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label>URL de la imagen</label>
                              <input
                                class="form-control"
                                type="url"
                                name="image"
                                value={form.image}
                                onChange={handleInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label>Nombre del producto</label>
                              <input
                                class="form-control"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label>Precio</label>
                              <input
                                class="form-control"
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row" style={{ marginLeft: "4em" }}>
                          <div class="">
                            <div class="form-group">
                              <button
                                id="btnSave"
                                type="submit"
                                class="btn btn-primary"
                                name="save-details"
                              >
                                Guardar
                              </button>
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
