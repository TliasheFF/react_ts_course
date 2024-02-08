import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mocks";
import { NormalizedRestaurant } from "../../../constants/normalized-mocks-types";

type RestaurantEntities = {
  [id: string]: NormalizedRestaurant;
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc: RestaurantEntities, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
