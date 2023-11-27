import "./categories.css";
import { categories } from "../../data";
import CategoriesItem from "../categoriesitem/CategoriesItem";

export default function Categories() {
  return (
    <div className="CardContainer1">
    <div className="Container">
      {categories.map(item=>(
        <CategoriesItem item={item} key={item.id}/>
      ))}
    </div>
    </div>
  )
}
