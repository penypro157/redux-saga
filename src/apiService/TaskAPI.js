import { API_URL } from "../constants"
import ApiHanlder, { get } from "../Utils/ApiHandler"
const taskURL = 'tasks'
export const getAllTask = (searchText) => {
    debugger
    var query = searchText !== '' && searchText !== undefined ? `?search=${searchText}` : '';
    var url = `${API_URL}/${taskURL}${query}`;
    return ApiHanlder.get(url);
}
export const addTask = (task) => {
    var url = `${API_URL}/${taskURL}`;
    return ApiHanlder.post(url, task);
}