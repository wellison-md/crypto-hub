/**
 * Get data from web-local storage
 * @param {String} key - the name of key that access the data what you want
 * @returns {Object[]} an array of object with value from localStorage or a empty array
 */
export function getFromStorage(key) {
  if (!key) throw new Error('A key is required');
  const data = localStorage.getItem(key);
  return JSON.parse(data) || [];
}

/**
 * Save data with a key of access.
 * @param {String} key - the name of key to save.
 * @param {*} payload - the data to save.
 */
export function saveOnStorage(key, payload) {
  if (!key || !payload) throw new Error('Key and payload are required');
  localStorage.setItem(key, JSON.stringify(payload));
}
