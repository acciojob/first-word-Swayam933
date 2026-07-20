function firstWord(str) {
  if (str === '') return '';

  const trimmed = str.replace(/^ +/, ''); // drop leading spaces first
  const spaceIndex = trimmed.indexOf(' ');

  return spaceIndex === -1 ? trimmed : trimmed.slice(0, spaceIndex);
}