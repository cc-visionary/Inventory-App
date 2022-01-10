/* Contains the functions to requests to URL Paths in relation to the `products` collection */

import axios from "axios";

import { PRODUCT_API_BASE_URL } from "../utils/constants";

const UserService = {
  getAllProducts: () => axios.get(PRODUCT_API_BASE_URL),
  postAddProduct: (product) => axios.post(`${PRODUCT_API_BASE_URL}/add`, product),
  patchProduct: (product) => axios.patch(PRODUCT_API_BASE_URL, product),
  deleteProduct: (name) => axios.delete(`${PRODUCT_API_BASE_URL}/delete/${name}`)
}

export default UserService;