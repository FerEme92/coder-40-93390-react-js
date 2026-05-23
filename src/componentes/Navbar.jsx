//import css
import "../css/NavBar.css"
import CartWidget from "./CartWidget"

const Navbar= (Props)=>{
//logica
    return(
        <nav className ='nav-container'> 
            <a href="" className="anchor-nav"  >
                <img src='../logo.png' alt="logo"  className="logo"/>
            </a>
            <a href="" className="anchor-nav">Nuevos</a>
            <a href="" className="anchor-nav">Ofertas</a>
            <a href="" className="anchor-nav">Mas Vendidos</a>
            <CartWidget compra={15} cart={Props.cart} />
        </nav>
    )
}
export default Navbar