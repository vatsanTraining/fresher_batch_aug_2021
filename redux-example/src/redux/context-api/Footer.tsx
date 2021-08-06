import { AppContext } from "./context"
import React from "react"
import ReactDOM from 'react-dom';

const Footer = () => {
   return(
       <AppContext.Consumer>

           {
               (props)=>{

                return <h1>Developed {props.developer}</h1>
               }
           }
       </AppContext.Consumer>
   )
}

export default Footer;
