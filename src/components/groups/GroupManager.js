import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getGroups = () => {
    return fetchIt(`${Settings.API}/groups`)
}

export const addGroup = (group) => {
    return fetchIt(`${Settings.API}/groups`, "POST", JSON.stringify(group))
}

export const deleteGroup = (group) => {
    return fetchIt(`${Settings.API}/groups/${group.id}`, "DELETE")
}

export const editGroup = (group) => {
    return fetchIt(`${Settings.API}/groups/${group.id}`, "PUT", JSON.stringify(group))
}