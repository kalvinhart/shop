export const getUserTokenFromStorage = (): any => {
  const storage = JSON.parse(localStorage.getItem("user")!);
  return { id: storage.user._id, token: storage.token };
};
