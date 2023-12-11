export const signOut = async () => {
  const token = localStorage.getItem("userToken");
  if (token) localStorage.removeItem("userToken");
};
