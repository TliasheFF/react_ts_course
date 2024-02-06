import React from "react";
import { AuthUser } from "../../constants/auth-user-types";

export const UserContext = React.createContext<AuthUser>({
    user: "",
    setUser: () => {},
});