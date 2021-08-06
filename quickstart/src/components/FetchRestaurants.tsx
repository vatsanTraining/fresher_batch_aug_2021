import React,{useState,useEffect,FunctionComponent} from "react";
import axios from "axios";
import { Restaurant } from '../model/models';


const FetchRestaurants:FunctionComponent = () => {

    const [list,setList] = useState<Restaurant[]>([]);

    useEffect(() => {
        axios.get<Restaurant[]>('http://localhost:8080/restaurants')
                   .then(result => {  
                     setList(result.data)});     
       }, []);

 
    const renderItems =function(item:Restaurant){

        return(

                <tbody>
                    <tr key={item.id}>
                        <td>{item.restaurantName}</td>
                        <td>{item.location}</td>
                        <td>{item.category}</td>
                        <td>{item.rating}</td>
                    </tr>
                </tbody>

        )

    }

    return (
        <div>
             <table className="table table-striped">
                <thead>
                    <tr>
                        <td>RestaurantName</td>
                        <td>Location</td>
                        <td>Category</td>
                        <td>Rrating</td>
                    </tr>
                </thead>
            

            {

                  list.map(function(eachItem,idx){
                    return   renderItems(eachItem);
                           }
                  )
               }
               </table>
        </div>
    )
}

export default FetchRestaurants
