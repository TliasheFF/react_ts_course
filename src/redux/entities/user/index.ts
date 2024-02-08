import { createSlice } from "@reduxjs/toolkit";
import { NormalizedUser } from "../../../constants/normalized-mocks-types";
import { normalizedUsers } from "../../../constants/normalized-mocks";

type userEntities = {
    [id: string]: NormalizedUser;
  }

export const userSlice = createSlice({
    name: "user",
    initialState: {
        entities: normalizedUsers.reduce((acc: userEntities, user) => {
            acc[user.id] = user;

            return acc;
        }, {}),
        ids: normalizedUsers.map(({ id }) => {id}),
    },
    reducers: {}
});