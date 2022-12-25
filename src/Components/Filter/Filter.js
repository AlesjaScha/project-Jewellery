import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory,filterCategory } from "../../redux/jewelsSlice";


const Filter = ({category})=>{
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div className="photo">
       <p onClick={()=>
        {dispatch(filterCategory(category))}}className={selectedCategory === category? "categoryButtonSelected":"categoryButton"}>{category}</p>
        </div>
    )
}
export default Filter;