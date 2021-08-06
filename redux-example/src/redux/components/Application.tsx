import { useSelector,useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { MyAction } from "../CountAction"


interface AppState  {
        count: MyAction
      }
    
export const Application = () => {

    const { count } = useSelector((state:AppState ) => state);
    const countDispatch = useDispatch<Dispatch<MyAction>>();

 const handleIncrement = () => {
            countDispatch({type: 'INCREMENT',count:1});
        }
    
        const handleDecrement = () => {
            countDispatch({type: 'DECREMENT',count:1});
        }
    
    return (
        <div>
                 <button onClick={handleIncrement}>+</button>
                  {count}
                <button onClick={handleDecrement}>-</button>
           
        </div>
    )
}
