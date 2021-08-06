import { MyAction } from './CountAction';
export interface CountState {
        count: number;
    }
    
const initialState:CountState = {
     count:1
}

export default (state:CountState = initialState, action:MyAction) => {
   console.log(action);
    switch (action.type) {

    case 'INCREMENT':
        console.log(state.count);
        return { ...state, count:state.count+1 }
     case 'DECREMENT':
         return {...state,count:state.count-1}
    default:
        return state
    }
}
