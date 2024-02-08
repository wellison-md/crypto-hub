export function limitText(txt) {
  if (!txt || typeof txt !== 'string') {
    return 'This coin don\'t provide a valid description yet';
  }

  const text = txt.split('.')
  const limitText = [...text].filter((_c, i) => i <= 3);
  console.log(limitText.toString())
  return limitText.join('').toString();
}
