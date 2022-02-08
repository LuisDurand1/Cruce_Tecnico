import SvgCart from "../assets/SvgCart";

const Item = ({ item }) => {
  return (
    <div className="card__container">
      <div className="card__img__container">
        <img className="card__img" src={item.image}></img>
      </div>

      <div className="card__data__container">
        <div
          className="card__descri                
     ption"
        >
          <h3 id="funko">Funko</h3>
          <p id="card__description__name"> {item.name}</p>
        </div>

        <div className="card__price">
          <div className="card__price__int">
            <p id="card__price__interest"> 6 Cuotas s/interés</p>
            <p id="card__price__price"> ${item.price}</p>
          </div>
          <p id="card__price__final">
            <span id="span__final">Final:</span>{" "}
            <span id="span__final2">$2.390</span>
            <span id="span__final3"> $1.269</span>
          </p>
         <SvgCart/>
        </div>
      </div>
    </div>










  );
};

export default Item;
