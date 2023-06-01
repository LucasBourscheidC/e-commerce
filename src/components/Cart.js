import { useContext } from "react";
import { CartProductsContext } from "./CartProductsContext";
import CartDisplay from "./CartDisplay";

export default function Cart(){
    const { cartProducts, setCartProducts } = useContext(CartProductsContext);
    let totalPrice = 0;
    if(cartProducts.length > 0){
        cartProducts.map((product)=>{
            totalPrice += product.price;
        })
    }
    else{
            totalPrice = 0;
    }
    return<>
    <div>
        <h1>Carrinho</h1>
        <h3>Valor Total: R$ {totalPrice.toFixed(2)}</h3>
        <button>Finalizar compra</button>
       {
            cartProducts.map((product, index)=>(
                <CartDisplay key={index} product={product} />
            ))

       } 
    </div>
        

    </>
}