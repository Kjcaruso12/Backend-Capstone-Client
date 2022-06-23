import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getProfile = () => {
    return fetchIt(`${Settings.API}/profile/my-profile`)
}

export const getUsers = () => {
    return fetchIt(`${Settings.API}/users`)
}