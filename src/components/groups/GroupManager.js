import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getGroups = () => {
    return fetchIt(`${Settings.API}/groups`)
}