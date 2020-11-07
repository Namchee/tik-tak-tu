import { reactive, toRefs } from 'vue';
import Game from './../components/Game';
import Splash from './../components/Splash';
import { CROSS, IN_PROGRESS } from './../common';

const initialGameState = {
  game: Array(9).fill(''),
  turn: CROSS,
  winner: null,
  state: IN_PROGRESS,
};

// Pseudo Router State
const pageState = reactive({
  currentPage: Splash,
});

// Change Page to Game
const toGame = () => {
  pageState.currentPage = Game;
}

// Change Page to Splash
const toSplash = () => {
  pageState.currentPage = Splash;
}

// Game Configuration with default config
const configState = reactive({
  player: CROSS,
});

// Game State Store
const gameState = reactive({
  ...initialGameState,
});

// Resets the game state
const resetGameState = () => {
  // No reference array copy hack
  gameState.game = JSON.parse(JSON.stringify(initialGameState.game));
  gameState.state = initialGameState.state;
  gameState.turn = initialGameState.turn;
  gameState.winner = initialGameState.winner;
}

// Pseudo Navigation Functions
export function useNavigator() {
  return {
    ...toRefs(pageState),
    toGame,
    toSplash,
  };
}

// Pseudo Game Config Store
export function useConfig() {
  return {
    ...toRefs(configState),
  };
}

export function useGameState() {
  return {
    ...toRefs(gameState),
    resetGameState,
  };
}
