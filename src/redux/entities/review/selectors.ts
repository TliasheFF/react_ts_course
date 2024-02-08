import { RootState } from "../..";

export const selectorReviewModule = (state: RootState) => state.review;

export const selectReviewById = (state: RootState, id: string) => selectorReviewModule(state).entities[id];