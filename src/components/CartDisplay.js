import { useContext } from "react"
import { CartProductsContext } from "./CartProductsContext"

export default function CartDisplay({product}){
    const {cartProducts, setCartProducts} = useContext(CartProductsContext)
    const removeProduct = (productId)=> {
        const index = cartProducts.findIndex(product => product.id === productId);
        if (index !== -1) {
          const updatedProducts = [...cartProducts];
          updatedProducts.splice(index, 1);
          setCartProducts(updatedProducts);
        }
    }
    return<>
        <div>
            <img src={product.img} />
            <h3>{product.name}</h3>
            <p>{product.description} </p>
            <p>{product.techInfo}</p>
            <h2>R$ {product.price}</h2>
            <button onClick={()=>removeProduct(product.id)}>Remover Produto</button>
        </div>
    </>
}