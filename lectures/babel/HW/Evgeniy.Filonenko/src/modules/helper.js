export const displayName = ([{ firstname }]) =>
  console.log(firstname);

export const displayLastName = ([obj]) =>
  console.log(obj.lastName);

const displayAll = (selector, obj) => {
  const targetNode = document.querySelector(selector);
  const tableNode = document.createElement('TABLE');
  const trHeadNode = document.createElement('TR');

  Object.keys(obj[0]).forEach((key) => {
    const thNode = document.createElement('TH');
    thNode.innerHTML = key;
    trHeadNode.appendChild(thNode);
  });
  tableNode.appendChild(trHeadNode);

  obj.forEach((el) => {
    const trNode = document.createElement('TR');

    Object.keys(el).forEach((key) => {
      const tdNode = document.createElement('TD');
      tdNode.innerHTML = el[key];
      trNode.appendChild(tdNode);
    });

    tableNode.appendChild(trNode);
  });
  targetNode.appendChild(tableNode);
};

export default displayAll;
