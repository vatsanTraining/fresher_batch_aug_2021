import { AppContext } from "./context"
import React from "react"
import ReactDOM from 'react-dom';

const Header = () => {
    return(
        <AppContext.Consumer>
 
            {
                (props)=>{
 
                 return <h1>Designed by {props.designer}</h1>
                }
            }
        </AppContext.Consumer>
    )
    
}

export default Header
