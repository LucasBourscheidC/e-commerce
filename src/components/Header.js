import '../styles/header.css';
import { Link } from "react-router-dom"
import {CartProductsContext} from "./CartProductsContext";
import { useContext, useState } from 'react';

export default function Header(){
    const { cartProducts, setCartProducts } = useContext(CartProductsContext);
    const [searchInput, setSearchInput] = useState("");
    function search(e){
        e.preventDefault();
    }
    return <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/peripherals" >Peripherals</Link></li>
                    <li><Link to="/hardware" >Hardware</Link></li>
                    <li>
                        <form onSubmit={search}>
                            <input 
                            onChange={(e)=>{
                            setSearchInput(e.target.value)
                            console.log(searchInput);
                            }}
                            type="text" 
                            placeholder="Nome do Produto">
                            </input>
                            <Link to={`/search/${searchInput}`}>
                                <button className="button-submit" 
                                type={"submit"}>
                                Procurar
                                </button>
                            </Link>
                        </form>
                    </li>
                    <li>
                    <Link to="/cart" >
                        <div>
                            <img className='shopping-cart-img' src='/e-commerce/images/shopping-cart.png' alt='cart-img' />
                            <span>{cartProducts.length}</span>
                        </div>
                    </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}