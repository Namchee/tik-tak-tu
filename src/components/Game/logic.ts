import { getRandomIntInclusive } from './../../util';

// Check if the game is continuable or not by checking if every value
// on the state isn't empty.
export function isGameContinuable(state: string[]): boolean {
  return state.some(val => val === '');
}

// Get the winner if possible or null if the winner cannot be decided yet.
export function getWinner(state: string[]): string | null {
  // Check the horizontal
  for (let i = 0; i <= 6; i += 3) {
    if (state[i] === state[i + 1] && state[i] === state[i + 2]) {
      return state[i];
    }
  }

  // Check the verticals 
  for (let i = 0; i < 3; i++) {
    if (state[i] === state[i + 3] && state[i] === state[i + 6]) {
      return state[i];
    }
  }

  // Check the diagonals
  if (state[0] === state[4] && state[0] === state[8]) {
    return state[0];
  }

  if (state[2] === state[4] && state[2] === state[6]) {
    return state[2];
  }

  return null;
}

// Get Filled Block By Bot, just randomize it (;
export function getFill(state: string[]): number {
  const pos = [];

  for (let i = 0; i < state.length; i++) {
    if (state[i] === '') {
      pos.push(i);
    }
  }

  return pos[getRandomIntInclusive(0, pos.length - 1)];
}
