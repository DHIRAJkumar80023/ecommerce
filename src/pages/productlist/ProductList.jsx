import "./productlist.css";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import NewSleeter from "../../components/newsletter/NewsLetter";
import Products from "../../components/products/Products";

export default function ProductList() {
  return (
    <div className="ProductlistpageContainer">
      <Navbar/>
      <Announcement/>
      <h1 className="ProductPageTitle">Dresses</h1>
      <div className="FilterContainer">
        <div className="Filter">
          <span className="FilterText">Filter Products:</span>
          <select className="SelectOption" >
             <option value="someOption">Color</option>
             <option value="otherOption">Black</option>
             <option value="otherOption">Red</option>
             <option value="otherOption">Blue</option>
             <option value="otherOption">Yellow</option>
             <option value="otherOption">White</option>
             <option value="otherOption">Green</option>
           </select>
           <select  className="SelectOption">
             <option value="someOption">Size</option>
             <option value="otheroption">S</option>
             <option value="otherOption">M</option>
             <option value="otherOption">L</option>
             <option value="otherOption">XL</option>
             <option value="otherOption">XXL</option>
             
           </select>
        </div>
        
        <div className="FilterSize">
          <span className="FilterText">Sort Products:</span>
          <select className="SelectOption">
             <option value="someOption">Newest</option>
             <option value="otherOption">Price(asc)</option>
             <option value="otherOption">Price (desc)</option>
             
             
           </select>
        </div>

      </div>
      <Products/>
      <NewSleeter/>
    <Footer/>
    </div>
  )
}
