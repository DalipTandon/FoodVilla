import { useState,useEffect } from "react";


const useRestaurantMenu=( FOODFIRE_MENU_API_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY)=>{
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(()=>{
        restaurantInfo();
    },[]);
    
    const restaurantInfo = async () => {
        try {
          const response = await fetch(FOODFIRE_MENU_API_URL + resId);
          const json = await response.json();
          const restaurantData =
            json?.data?.cards
              ?.map((x) => x.card)
              ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
              ?.info || null;
          setRestaurant(restaurantData);
          const menuItemsData =
            json?.data?.cards
              .find((x) => x.groupedCard)
              ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
              ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
              ?.map((x) => x.itemCards)
              .flat()
              .map((x) => x.card?.info) || [];
          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find((x) => x.id === item.id)) {
              uniqueMenuItems.push(item);
            }
          });
          setMenuItems(uniqueMenuItems);
        } catch (error) {
          setMenuItems([]);
          setRestaurant(null);
          console.log(error);
        }
      };
      return [restaurant,menuItems];
}

export default useRestaurantMenu;