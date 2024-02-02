export type AuthUsers = {
    fullName: string;
    mail: string;
    authorized: boolean;
}

export const USER_INITIAL_STATE: AuthUsers = {
        fullName: "",
        mail: "",
        authorized: false,
    }

export const authorizedUser: AuthUsers = {
    fullName: "",
    mail: "",
    authorized: false,
}