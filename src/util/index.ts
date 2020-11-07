// Get random number from min and max, inclusive
// Copied from MDN
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive 
}

// Sleep function for bot processing hack :)
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
