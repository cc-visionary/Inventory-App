// local storage for the user

/* ---------------- USER ------------------*/

// return the user data from the local storage
export const getUser = () => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  return null;
};

// remove the token and user from the local storage
export const removeLocalUser = () => {
  localStorage.removeItem('user');
};

// set the token and user from the local storage
export const setUserLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};