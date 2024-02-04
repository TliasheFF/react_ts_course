import React from "react";
import { AuthUser } from "../../constants/auth-user";

export const UserContext = React.createContext<AuthUser>({fullName: "", mail: ""});