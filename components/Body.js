import RestaurantCard from "/components/RestaurantCard"
import { restaurantList } from "../utils/constant";
import { useState ,useEffect} from "react";
import { Food_Api } from "../utils/constant";
import Shimmer from "./Shimmer";
 
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
    const[errorMessage,seterrroMessage]=useState("");

    //useEffect() hook
    useEffect(()=>{
        cardDataApi();
        
    },[]);
 
     //fetching api data
   const cardDataApi=async()=>{
    try{
        const response=await fetch(Food_Api);
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

    //error message if search is not available
    const SearchData=(searchText,allRestaurants)=>{
        if(searchText!=""){
            const filteredData=filterData(searchText,allRestaurants);
            setfilteredRestaurant(filteredData);
            seterrroMessage("");
            if(filteredData?.length===0){
                seterrroMessage("No matched restaurant Found")
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
        {allRestaurants?.length===0?
        (<Shimmer/>) : (
        <div className="restaurant-list">
           { filteredRestaurant.map((restaurant)=>{
              return <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id}/>
            })
            }
        </div>
        )};
          </>

    );
};
export default Body;