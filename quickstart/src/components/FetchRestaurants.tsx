import React,{useState,useEffect,FunctionComponent} from "react";
import axios from "axios";
import { Restaurant } from '../model/models';
import ViewRestaurants from './ViewComponent';


const FetchRestaurants:FunctionComponent = () => {

    const [list,setList] = useState<Restaurant[]>([]);

    useEffect(() => {
        axios.get<Restaurant[]>('http://localhost:8080/restaurants')
                   .then(result => {  
                     setList(result.data)});     
       }, []);

 
    

    return (
        <div>
            <ViewRestaurants list={list}></ViewRestaurants>
        </div>
    )
}

export default FetchRestaurants
