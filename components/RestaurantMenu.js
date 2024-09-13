import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../Hooks/useRestaurantMenu.js";
import { FOODFIRE_MENU_API_URL, IMG_CDN_MENU_ITEM,
    MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY
 } from "../utils/constant.js";
const RestaurantMenu = () => {
  const {resId} = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(FOODFIRE_MENU_API_URL, resId,
    RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY);

  return !restaurant?(<MenuShimmer/>): (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_MENU_ITEM + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating" >
            <i className="ri-star-s-fill"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div className="cost-time">{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div  className="cost-time">{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={IMG_CDN_MENU_ITEM + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
