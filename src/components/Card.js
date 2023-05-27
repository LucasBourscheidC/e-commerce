import '../styles/card.css';
import { CartProductsContext } from './CartProductsContext';
import { useContext } from 'react';

export default function Card({product}){
    const { setCartProducts } = useContext(CartProductsContext);
    return<>
        <div className='card'>
            <div className="container-flex-card">
                <img src={product.img} alt="Imagem de um mouse"></img>
                <hr></hr>
                <h4>{product.name}</h4>
                <h1>R$ {product.price}</h1>
            </div>
            {/* button adds this card product to the cartproducts array */}
            <button className="add-to-cart" onClick={()=>{setCartProducts((prevProducts)=>[...prevProducts, product])}}>Adicionar no Carrinho</button>
        </div>
    </>
}