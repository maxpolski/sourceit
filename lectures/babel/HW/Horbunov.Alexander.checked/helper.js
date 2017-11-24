export const displayName = ({ name }) =>
  console.log(name);

export const displayLastName = obj =>
  console.log(obj.lastName);

const displayAll = (obj) => {
  displayName(obj);
  displayLastName(obj);
};

export default displayAll;
