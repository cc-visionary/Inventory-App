// local storage for the user

/* ---------------- USER ------------------*/

// return the user data from the local storage
export const getUser = () => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  return null;
};

// return the token from the local storage
export const getUserToken = () => localStorage.getItem('userToken') || null;

// remove the token and user from the local storage
export const removeLocalUser = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('user');
};

// set the token and user from the local storage
export const setUserLocal = (token, user) => {
  localStorage.setItem('userToken', token);
  localStorage.setItem('user', JSON.stringify(user));
};