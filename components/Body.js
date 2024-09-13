import RestaurantCard from "/components/RestaurantCard"
import { restaurantList } from "../utils/constant";
import { useState ,useEffect} from "react";
import { Food_Api } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResturantData from "../Hooks/useResturantData";
import { filterData } from "../utils/Helper";
//filter function for the search bar
const Body=()=>{
    //react state variables 
    const[searchText,setsearchText]=useState("");
    const[allRestaurants,filterres]=useResturantData(Food_Api); //useResturant is a custom hook which will return the fetched data
    const[filteredRestaurant,setfilteredRestaurant]=useState(null);
    const[errorMessage,seterrroMessage]=useState("");

    //error message if search is not available
    const SearchData=(searchText,allRestaurants)=>{
        if(searchText!=""){
            const filteredData=filterData(searchText,allRestaurants);
            setfilteredRestaurant(filteredData);
            seterrroMessage("");
            if(filteredData?.length===0){
                seterrroMessage(`Sorry we could't find any result for the "${searchText}"`);
            }
        }else{
            seterrroMessage("");
            setfilteredRestaurant(allRestaurants);
        }
    }
    if(searchText!=='')
   //if restaurant data is null early return
    if(!allRestaurants)return null;
    return(
        <>
        <div className="search-bar">
            <input type="text" placeholder="search" 
            value={searchText}
            onChange={(e)=>{
                setsearchText(e.target.value);
                SearchData(e.target.value, allRestaurants); //sending the values typed on input search box to SearchData function
            }}
            />
            <button className="search-button" onClick={
                ()=>{
                   SearchData(searchText,allRestaurants);
                }
            } >Search</button>
        </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}
        {/* {creating shimmer effect before api fetching} */}
        {allRestaurants?.length===0 && filterres.length===0?
        (<Shimmer/>) : (
        <div className="restaurant-list">
           { (filteredRestaurant===null?filterres:filteredRestaurant).map((restaurant)=>{
              return <Link  to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}><RestaurantCard {...restaurant?.info} />
              </Link>;
            })
            }
        </div>
        )};
          </>

    );
};
export default Body;