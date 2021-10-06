// Get token from session storage if it exists.
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// Set token to the session storage.
export const setUserSession = (token) => {
  sessionStorage.setItem('token', token);
}