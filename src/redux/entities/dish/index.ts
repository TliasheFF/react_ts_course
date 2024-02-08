import { createSlice } from "@reduxjs/toolkit";
import { NormalizedDish } from "../../../constants/normalized-mocks-types";
import { normalizedDishes } from "../../../constants/normalized-mocks";

type dishEntities = {
    [id: string]: NormalizedDish;
}

export const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: normalizedDishes.reduce((acc: dishEntities, dish) => {
            acc[dish.id] = dish;

            return acc;
        }, {}),
        ids: normalizedDishes.map(({ id }) => {id}),
    },
    reducers: {},
});