import useInput from "../hooks/useInput";
import axios from "axios";
import useInputNum from "../hooks/useInputNum";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const image = useInput();
  const name = useInput();
  const price = useInputNum();
  const navigate=useNavigate()

  const handleSumbit = (e) => {
    e.preventDefault();
    price.value=Number(price.value)

     axios.post("http://localhost:3001/api/products", {
      image: image.value,
      name: name.value,
      price: price.value,
    }).then(()=>   navigate("/allproducts") )
    .catch(error=>console.log(error)) 
  };

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
            <form onSubmit={handleSumbit}>
              <div class="row">
                <div class="col mb-4" >
                  {image.value ? (
                    <img src={image.value} class="rounded" />
                  ) : (
                    <img
                      src="http://via.placeholder.com/150x150"
                      class="rounded"
                    />
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>URL de la imagen</label>
                    <input
                      class="form-control"
                      type="url"
                      name="image"
                      {...image}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Nombre del producto</label>
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      {...name}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Precio</label>
                    <input
                      class="form-control"
                      type="number"
                      name="price"
                      {...price}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">
                      Guardar
                    </button>
                    <button type="submit" class="btn btn-light">
                      Volver
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
