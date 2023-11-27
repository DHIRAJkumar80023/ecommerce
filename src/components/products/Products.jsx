import "./products.css";
import { popularProducts } from "../../data";
import Product from "../product/Product";

export default function Products() {
  return (
    <div className="ProductsContainer">
      
      {popularProducts.map(item=>(
        <Product item={item} key={item.id}/>
      ))}

      
      
    </div>
  )
}
