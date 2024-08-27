import RestaurantCard from "/components/RestaurantCard"
import { restaurantList } from "../utils/constant";
import { useState ,useEffect} from "react";
 
//filter function for the search bar
const filterData=(searchText,restaurants)=>{
   const filterData= restaurants.filter((res)=>{
    return (res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    })
    return filterData;
}
const Body=()=>{
    //react state variables 
    const[searchText,setsearchText]=useState("");
    const[allRestaurants,setallRestaurants]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);

    useEffect(()=>{
        cardDataApi();
        
    },[]);

   const cardDataApi=async()=>{
    try{
        const response=await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await response.json();
        
        function checkJsonData(jsonData){
            for(let i=0;i<jsonData?.data?.cards.length; i++){
                let checkData =  json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

              if(checkData!=undefined){
                return checkData;
              }
            }
        }
        const resData=checkJsonData(json)
        setallRestaurants(resData);
        setfilteredRestaurant(resData);
    }
    catch(error){
        console.log(error);
        
    }
    }
    
   

    return(
        <>
        <div className="search-bar">
            <input type="text" placeholder="search" 
            value={searchText}
            onChange={(e)=>{
                setsearchText(e.target.value);
            }}
            />
            <button className="search-button" onClick={
                ()=>{
                   const data= filterData(searchText,allRestaurants);
                   setfilteredRestaurant(data);
                }
            } >Search</button>
        </div>
        <div className="restaurant-list">
           { filteredRestaurant.map((restaurant)=>{
              return <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id}/>
            })
            }
        </div>
        </>
    );
}
export default Body;