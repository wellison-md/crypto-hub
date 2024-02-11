export function maskName(txt, limit = 13) {
  if (!txt || typeof txt !== 'string') {
    throw new Error('the txt-param must be a valid text');
  }

  if (txt.length > limit) {
    const newText = txt.slice(0, limit);
    return `${newText}...`;
  }

  return txt;
}