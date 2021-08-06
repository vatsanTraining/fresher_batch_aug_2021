import React,{useState} from "react";
import axios from "axios";
import { Restaurant } from '../model/models';
import useForm from "../useForm";

const AddRestaurant = () => {

    const initialState:Restaurant ={
        id:0,restaurantName:'',category:'',rating:0,location:''
    }

    const {onChange,onSubmit,values} =useForm(restaurantCallBack,initialState);

     const api ='http://localhost:8080/restaurants'
    
    function  restaurantCallBack (){

        axios.post<Restaurant>(api,values)
        .then(result => {  
           console.log("result"+result.data)});     

}
    
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">id</label>
          <input
            type="number"
            className="form-control"
            name="id"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">Restaurant Name</label>
          <input
            type="text"
            className="form-control"
            name="restaurantName"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">Rating</label>
          <input
            type="text"
            className="form-control"
            name="rating"
            onChange={onChange}
          />
        </div>
                    
        <button type="submit" className="btn btn-info">
          {" "}
          Login
        </button>
      </form>
    );
}

export default AddRestaurant
