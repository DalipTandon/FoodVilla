import {IMG_CDN} from "../utils/constant";
import {restaurantList} from "../utils/constant";
 const RestaurantCard=({name,cuisines=[],areaName,avgRatingString, sla,costForTwo,cloudinaryImageId  })=>{
  const maxCuisinesToShow = 3;
  
  // Ensure cuisines is an array and use it safely
  const displayedCuisines = Array.isArray(cuisines) ? cuisines.slice(0, maxCuisinesToShow).join(", ") : "";
  const additionalCuisines = cuisines.length > maxCuisinesToShow ? "..." : ""; 
  return(
    <div className="card">
      <div className="image">
      <img src={IMG_CDN+cloudinaryImageId}/>
      </div>
        <h2 className="item-name">{name}</h2>
        <h4 className="area">{areaName}</h4>
        <h4  className="area" >{displayedCuisines + additionalCuisines}</h4>
        <span>

        <h4>
         <i className="ri-star-s-fill"></i>
            {avgRatingString}
            </h4>
        <h4>{sla?.lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
        </span>
    </div>
    );
};
export default RestaurantCard;