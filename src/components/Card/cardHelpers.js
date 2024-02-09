export function maskName(txt) {
  if (!txt || typeof txt !== 'string') {
    throw new Error('the txt-param must be a valid text');
  }

  const LIMIT_LENGTH_CHARACTER = 13;
  if (txt.length > LIMIT_LENGTH_CHARACTER) {
    const newText = txt.slice(0, LIMIT_LENGTH_CHARACTER);
    return `${newText}...`;
  }

  return txt;
}