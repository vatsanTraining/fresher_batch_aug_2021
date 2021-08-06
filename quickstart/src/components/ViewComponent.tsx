import { FunctionComponent } from "react";
import { Restaurant, RestaurantList } from "../model/models";

const ViewRestaurants:FunctionComponent<RestaurantList> = ({...restaurants}) => {

    const renderItems =function(item:Restaurant){

        return(

                    <tr key={item.id}>
                        <td>{item.restaurantName}</td>
                        <td>{item.location}</td>
                        <td>{item.category}</td>
                        <td>{item.rating}</td>
                    </tr>
        )

    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Restaurant Name</th>
            <th>Location</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
            {restaurants.list.map(function (values, index) {
              return renderItems(values);
            })}
        </tbody>
      </table>
    );
            }

   export default ViewRestaurants;