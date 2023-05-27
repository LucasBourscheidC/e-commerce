import { useContext } from "react";
import { CartProductsContext } from "./CartProductsContext";
import CartDisplay from "./CartDisplay";

export default function Cart(){
    const { cartProducts, setCartProducts } = useContext(CartProductsContext);

    return<>
    <div>
        <h1>Carrinho</h1>
       {
            cartProducts.map((product, index)=>(
                <CartDisplay key={index} product={product} />
            ))

       } 
    </div>
        

    </>
}