export type AuthUser = {
    fullName: string;
    mail: string;
}

export const USER_INITIAL_STATE: AuthUser = {
        fullName: "",
        mail: "",
    }