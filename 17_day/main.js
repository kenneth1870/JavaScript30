const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function stripPrefixes(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

function setListItem(band) {
  if (band.match(/^(a |an |the )/i)) {
    return `<li>${stripPrefixes(band)} <em>Actual name: ${band}</em></li>`;
  } else {
    return `<li>${band}</li>`
  }
}
const sortedBands = bands.sort(
  (a, b) => stripPrefixes(a) > stripPrefixes(b)
  ? 1
  : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => setListItem(band)).join('');

console.log(sortedBands);
