export const Logout = () => {
    console.log("*** Toggling auth state and removing credentials ***")
    localStorage.removeItem("auth_token")
    sessionStorage.removeItem("auth_token")
}