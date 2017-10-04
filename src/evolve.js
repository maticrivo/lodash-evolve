const evolve = (object, transformations) => {
  const result = {};
  for (const key in object) {
    const t = transformations[key];
    const type = typeof t;
    result[key] = type === 'function'
      ? t(object[key])
      : t && type === 'object'
        ? evolve(object[key], t)
        : object[key];
  }
  return result;
}

export default evolve;
