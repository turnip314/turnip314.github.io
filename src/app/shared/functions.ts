/**
 * Shuffles an array in-place using the Fisher-Yates algorithm.
 * @param array The list to be shuffled.
 * @returns The original array, now shuffled.
 */
export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}