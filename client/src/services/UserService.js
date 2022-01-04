/* Contains the functions to requests to URL Paths in relation to the `users` collection */

import axios from "axios";

const USER_API_BASE_URL = "/api/users";

const UserService = {
  getAllUsers: () => axios.get(USER_API_BASE_URL),
  postRegister: (username) => axios.post(`${USER_API_BASE_URL}/register`, { username }),
  postLogin: (user) => axios.post(`${USER_API_BASE_URL}/login`, user),
  postLogout: () => axios.post(`${USER_API_BASE_URL}/logout`),
  patchUser: (id, username, userType, previousPassword, newPassword) => axios.patch(`${USER_API_BASE_URL}`, {id, username, userType, previousPassword, newPassword}), 
  deleteUser: (id) => axios.delete(`${USER_API_BASE_URL}/${id}`),
}

export default UserService;