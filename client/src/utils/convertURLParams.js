export const convertURLParams = (URLObject) => {
  const newObject = {};

  for (const [key, value] of URLObject) {
    newObject[key] = value;
  }

  return newObject;
};
