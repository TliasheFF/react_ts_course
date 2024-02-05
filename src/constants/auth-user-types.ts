export type AuthUser = {
    user: string,
    setUser: (p: string) => void,
    showModal: boolean,
    setShowModal: (p: boolean) => void,
}