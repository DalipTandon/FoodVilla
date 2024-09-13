import { useState,useEffect } from "react";

const useResturantData=(Food_Api)=>{
    const[allRestaurants,setallRestaurants]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);

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
    return [allRestaurants, filteredRestaurant];
}

export default useResturantData;