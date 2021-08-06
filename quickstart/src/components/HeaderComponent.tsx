import React,{FunctionComponent} from "react"
import { Title, HeaderProps } from '../model/models';
import MenuComponent from "./MenuComponent";

const HeaderComponent:FunctionComponent<HeaderProps> = ({title,list}) => {
    return (
        <div className="row">
        <div className="col-md-4">
            <img className='pageLogo' src={title.logo} 
                   alt="Company Logo"></img>
         </div>
        <div className="col-md-8">
        <h1>{title.title}</h1>
          
            </div>    
            <div className="row">
         <MenuComponent list={list}></MenuComponent>   
        </div>
        </div>
    )
}

export default HeaderComponent
