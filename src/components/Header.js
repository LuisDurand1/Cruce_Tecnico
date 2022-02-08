import { Link } from "react-router-dom"
import SvgFilter1 from "../assets/SvgFilter1"
import SvgFilter2 from "../assets/SvgFilter2"
import SvgOrderBy from "../assets/SvgOrderBy"
const Header=()=>   {

return(<div className="padre">
<header>
 <div className="header">
   <nav className="nav">
     <Link className="navLink" to="#">
       Inicio
     </Link>
     /
     <Link className="navLink" to="#">
       Juguetes
     </Link>
     /
     <Link className="navLink" id="FunkoPop" to="#">
       Funko Pop
     </Link>
   </nav>

   <div className="filter">
     <button>
     <SvgFilter1/>
       Filtrar{" "}
      <SvgFilter2/>
     </button>
   </div>

   <div className="search">
     <button>
       Ordenar por{" "}
     <SvgOrderBy/>
     </button>
   </div>
 </div>
</header>
 <div className="hero-section__container">
   <img src="/port.png" alt="header" className="hero-section__img"></img>
 </div>
</div>)





}


export default Header