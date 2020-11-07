import { reactive, toRefs } from 'vue';
import Game from './../components/Game';
import Splash from './../components/Splash';
import { EASY, CROSS } from './../common';

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
  difficulty: EASY,
  player: CROSS,
});

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
