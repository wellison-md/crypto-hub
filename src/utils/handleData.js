/**
 * Filter a list by some attribute, operator and value.
 *
 * @param {Object[]} coinList - an array of objects with data about coin.
 * @param {String} attribute - a valid attribute from coin-object.
 * @param {Number} rate - a target-value to filter data.
 * @param {String} op - a flag: `greater` for filter by greater than; `lower` for filter by lower than. Otherwise filter by equals.
 * @returns
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
