import { useLocation} from "react-router-dom"
import { CartProductsContext } from './CartProductsContext';
import { useContext } from 'react';
export default function ProductDetails(){
    const { setCartProducts } = useContext(CartProductsContext);
    const location = useLocation();
    const product = location.state?.product;
    console.log(product);
    return<>
        <div>
            <img src={product.img} />
            <h2>{product.name}</h2>
            <h4>Descrição:{product.description}</h4>
            <h4>Informaçoes Tecnicas:{product.techInfo}</h4>
            <p>Marca:{product.brand}</p>
            <h1>R${product.price}</h1>
            <button onClick={()=>{setCartProducts((prevProducts)=>[...prevProducts, product])}}>Adicionar no Carrinho</button>
        </div>
    </>
}