import { RootState } from "../..";

export const selectorRestaurantModule = (state: RootState) => state.restaurant;

export const selectRestaurantIds = (state: RootState) => selectorRestaurantModule(state).ids;

export const selectRestaurantById = (state: RootState, id: string) => selectorRestaurantModule(state).entities[id];