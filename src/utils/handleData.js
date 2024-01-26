/**
 * Filter a list by some attribute, operator and value.
 *
 * @param {Object[]} coinList - an array of objects with data about coin.
 * @param {String} attribute - a valid attribute from coin-object.
 * @param {Number} rate - a target-value to filter data.
 * @param {String} op - a flag: `greater` for filter by greater than; `lower` for filter by lower than. Otherwise filter by equals.
 * @returns a filtered copy of `coinList`
 */
export function filterBy(coinList, attribute, rate, op) {
  if (!coinList || !attribute || !rate) {
    throw new Error('The coinList, attribute and rate are required');
  }

  const db = [...coinList];
  switch (op) {
    case 'greater':
      return db.filter((c) => c[attribute] >= rate);

    case 'lower':
      return db.filter((c) => c[attribute] <= rate);

    default:
      return db.filter((c) => c[attribute] === rate);
  }
}

/**
 * Order a list by either ascedent or descendent way
 *
 * @param {Object[]} coinList an array of objects with data about coin.
 * @param {String} attribute a valid attribute from coin-object.
 * @param {String} order `asc` to sort in ascedent way; `desc` to order in descedent way.
 * @returns a sorted copy of `coinList`.
 */
export function sortBy(coinList, attribute, order) {
  if (!coinList, !attribute, !order) {
    throw new Error('The `coinList`, `attribute` and `order` are required');
  }

  if (order !== 'asc' && order !== 'desc') {
    throw new Error('The order-attribute must be either `asc` or `desc`');
  }

  const coins = [...coinList];

  if (order === 'desc') {
    return coins.sort((a, b) => b[attribute] - a[attribute]);
  }

  return coins.sort((a, b) => a[attribute] - b[attribute]);
}
