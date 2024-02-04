import React from "react";
import { AuthUser } from "../../constants/auth-user";

type ModalContextType = {
    showModal: boolean,
    setShowModal: (p: boolean) => void,
    setUser: (p: AuthUser) => void,
}

export const ModalContext = React.createContext<ModalContextType>({
    showModal: false,
    setShowModal: () => {},
    setUser: () => {},
});