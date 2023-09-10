function curriedAdd(total) {
  if (total === undefined) {
    return 0;
  } else {
    return function currier(added) {
      if (added === undefined) {
        return total;
      }
      total += added;
      return currier;
    };
  }
}

module.exports = { curriedAdd };
