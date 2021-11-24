/* Contains the functions to requests to URL Paths in relation to the `users` collection */

import axios from "axios";

const USER_API_BASE_URL = "/api/users";

// NOTES: tested register and login
// TODO: add other usercontroller functions after clarifying with team ASK
const UserService = {
  getAllUsers: () => axios.get(USER_API_BASE_URL),
  postRegister: (user) => axios.post(`${USER_API_BASE_URL}/register`, user),
  postLogin: (user) => axios.post(`${USER_API_BASE_URL}/login`, user),
}

export default UserService;