const convertToRegex = (array) => {
  let regex = [];

  array.forEach((item, i) => {
    regex[i] = new RegExp(item, "i");
  });

  return regex;
};

module.exports = {
  convertToRegex,
};
