import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./cart.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Cart() {
  return (
    <div className="CartContainer">
      <Navbar/>
      <Announcement/>
       <div className="CartWrapper">
        <h1 className="CartTitle">Cart</h1>
        <div className="TOP">
        <button className="TOPbutton">CONTINUE SHOPPING</button>
          <div className="TOPtexts">
         
           
            
           
          </div>
          <div className="TOPtext">Shoping Bag (2)</div>
          <div className="TOPtext">Your Wishlist (0)</div>
          <div className="ProductCartContainer">
            
          </div>
          <button className="TOPbutton2">CHECKOUT NOW</button>
        </div>
        
        <div className="CartItems">
          <div className="CartItem">
            <img className="CartImg" src="./assets/nike.jpg" alt=""/>
            <div className="CartInfo">
              <h2 className="ProductName">Product:<span className="CartText"> nike first copy t shirt</span></h2>
              <h2 className="ProductId">ID:<span className="CartText">98253789523</span></h2>
              <div className="ProductColor"></div>
              <h2>Size:<span className="CartText">M</span></h2>
            </div>
            <div className="PriceAndQuantities">
            <RemoveIcon/>
             <span className="CartQuantities">1</span>
            <AddIcon/>
            <h1 className="CartPrice">$30</h1>
            </div>
            </div>
            
            
            <div className="CartItem">
            <img className="CartImg" src="./assets/nike.jpg" alt=""/>
            <div className="CartInfo">
              <h2 className="ProductName">Product:<span className="CartText"> nike first copy t shirt</span></h2>
              <h2 className="ProductId">ID:<span className="CartText">98253789523</span></h2>
              <div className="ProductColor"></div>
              <h2>Size:<span className="CartText">M</span></h2>
            </div>
            <div className="PriceAndQuantities">
            <RemoveIcon/>
             <span className="CartQuantities">1</span>
            <AddIcon/>
            <h1 className="CartPrice">$30</h1>
            </div>
            
            </div>



           
            </div>

             

           
           
          



           </div>
          <div className="CartBody">
          <div className="TotalPriceContainer">
           <h2 className="OrderSummary">ORDER SUMMARY</h2>
           <div className="OrderSummaryText">
             <h3 className="TotalPriceList">Subtotal</h3><span className="TotalPrices">$80</span>
           </div>
           <div className="OrderSummaryText">
             <h3 className="TotalPriceList">Estimated Shipping</h3><span className="TotalPrices">$5.90</span>
           </div>
           <div className="OrderSummaryText">
             <h3 className="TotalPriceList">Shipping Discount</h3><span className="TotalPrices">$5.90</span>
           </div>
           <div className="OrderSummaryText">
             <h3 className="TotalPriceList">Total</h3><span className="TotalPrices">$80</span>
            
           </div>
           <button className="OrderSummary-Btn">CHECKOUT NOW</button>
           </div>
          </div>
           <Footer/>
           </div>
           
           
         
       
      
      
    
  )
}
