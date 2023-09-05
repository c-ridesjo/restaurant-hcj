import axios from "axios";

export const createRestaurant = async () => {
  const response = await axios.post('https://school-restaurant-api.azurewebsites.net/restaurant/create', {
    "name": "A taste of ocean",
    "address": {
      "street": "Ocean Street 1",
      "zip": "123 45",
      "city": "Ocean City"
    }
  });
  console.log(response.data);
  
  return response.data;  
}
