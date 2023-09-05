import { get } from "./ServiceBase";

export const getRestaurant = async () => {
  return await get('restaurant/' + import.meta.env.VITE_RESTAURANT_ID);   
}