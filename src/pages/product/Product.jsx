import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewSleeter from "../../components/newsletter/NewsLetter";
import "./product.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



export default function Product() {
  return (
    <div className="ProductPageContainer">
      <Navbar/>
      <Announcement/>
      
      <div className="SingleproductpageWrapper">
        <div className="ProductImageContainer">
          <img className="SingleProductImg" src="./assets/nike.jpg" alt=""/>
        </div>
        <div className="SingleProductTitle">
          <h1>T-shirt</h1>
          <span className="SingleProductDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </span>
          <div className="SingleProductPrice">
          $ 20
        </div>
        <div className="FilterSection">
          Color
          <div className="FilterSectionColor1"></div>
          <div className="FilterSectionColor2"></div>
          <div className="FilterSectionColor3"></div>
          <div className="FilterSize">
          <span className="FilterText">Size:</span>
          <select className="SelectOption">
             <option value="someOption">S</option>
             <option value="otherOption">M</option>
             <option value="otherOption">L</option>
             <option value="otherOption">XL</option>
             
             
           </select>
        </div>
       

        </div>
        <div className="AmountContainer">
         <RemoveIcon/>
         <span className="Amount">1</span>
          <AddIcon/>
          <button className="Cart-Btn">Add to Cart</button>
        </div>
       
        </div>
        
      </div>
      <NewSleeter/>
      <Footer/>
      
    </div>
  )
}
