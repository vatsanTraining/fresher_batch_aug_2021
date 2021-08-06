export interface MyAction{
        type:string
        count:number
    }
    
    export interface incrementCountAction {
             readonly type: "INCREMENT"
        }
    
        export interface decrementCountAction {
              readonly type: "DECREMENT"
            }
    