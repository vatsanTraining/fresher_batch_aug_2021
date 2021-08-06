import { useSelector,useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { MyAction } from "../CountAction"


interface AppState  {
        count: MyAction
      }
    
export const SecondApplication = () => {

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
            <hr></hr>
                 <button onClick={handleIncrement}>Plus</button>
                  {count}
                <button onClick={handleDecrement}>Minus</button>
           <hr></hr>
        </div>
    )
}
