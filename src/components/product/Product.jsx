import "./product.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { popularProducts } from "../../data";

export default function Product({item}) {
  return (
    <div className="ProductContainer">
      
      <div className="Circle">
        <div className="CircleInfo">
        <img className="CircleImg" src="./assets/T-Shirt-PNG.png" alt=""/>
        <div className="IconItems">
        <div className="CircleIcon">
        <ShoppingCartIcon/>
         </div>
          <div className="CircleIcon">
            <SearchIcon/>
          </div>
            <div className="CircleIcon">
            <FavoriteBorderIcon/>
            </div>

        </div>
        
            
          
        </div>
       
        
      </div>

      </div>
     

    
  )
}
