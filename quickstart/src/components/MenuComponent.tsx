import React,{FunctionComponent} from "react"
import { Menu, MenuItem } from '../model/models';

const MenuComponent:FunctionComponent<Menu> = (items:Menu) => {
    return (
        <div>
            {
             items.list.map(function(value,idx){

                return <a href={value.link}>{value.linkText}</a>
             })

            }
         
            
                
        </div>
    )
}

export default MenuComponent
