const sumHandler = (arrOfObj, prop, quantity) =>
  arrOfObj.reduce(
    (pre, curr) =>
      curr[quantity] ? pre + curr[prop] * curr[quantity] : pre + curr[prop],
    0
  );
export { sumHandler };
