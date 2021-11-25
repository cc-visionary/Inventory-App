/* Contains the functions to requests to URL Paths in relation to the `users` collection */

import axios from "axios";

const USER_API_BASE_URL = "/api/users";

const UserService = {
  getAllUsers: () => axios.get(USER_API_BASE_URL),
  postRegister: (username) => axios.post(`${USER_API_BASE_URL}/register`, { username }),
  postLogin: (user) => axios.post(`${USER_API_BASE_URL}/login`, user),
  postLogout: () => axios.post(`${USER_API_BASE_URL}/logout`),
  deleteUser: (username) => axios.delete(`${USER_API_BASE_URL}/${username}`),
}

export default UserService;