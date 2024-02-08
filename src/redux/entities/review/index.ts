import { createSlice } from "@reduxjs/toolkit";
import { NormalizedReview } from "../../../constants/normalized-mocks-types";
import { normalizedReviews } from "../../../constants/normalized-mocks";

type reviewEntities = {
    [id: string]: NormalizedReview;
}

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: normalizedReviews.reduce((acc: reviewEntities, review) => {
            acc[review.id] = review;

            return acc;
        }, {}),
        ids: normalizedReviews.map(({ id }) => {id}),
    },
    reducers: {}
});