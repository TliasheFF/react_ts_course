import { RootState } from "../..";

export const selectorDishModule = (state: RootState) => state.dish;

export const selectDishById = (state: RootState, id: string) => selectorDishModule(state).entities[id];