import "./categoriesitem.css";
import { categories } from "../../data";

export default function CategoriesItem({item}) {
  return (
    <div className="CardContainer">
      <img className="cardImg" src={item.img} alt=""/>
      <div className="Info">
        <h1 className="Title">{item.title}</h1>
        <button className="Btn">SHOP NOW</button>
      </div>
        
      </div>
    
  )
}
