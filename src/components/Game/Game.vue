<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { CROSS, CIRCLE, WIN, LOSE, DRAW, IN_PROGRESS } from '../../common';
import { useConfig, useGameState, useNavigator } from '../../store';
import { getFill, getWinner, isGameContinuable } from './logic';
import { sleep, getRandomIntInclusive } from './../../util';
import Cell from './Cell.vue';

export default defineComponent({
  name: 'Game',

  components: {
    Cell,
  },

  setup() {
    const { player } = useConfig();
    const { game, turn, winner, state, resetGameState } = useGameState();
    const { toSplash } = useNavigator();

    // toggle player turns
    const toggleTurn = () => {
      if (turn.value === CROSS) {
        turn.value = CIRCLE;
      } else {
        turn.value = CROSS;
      }
    }

    // check if the game is over or not
    const determineGameState = () => {
      const winner = getWinner(game.value);

      if (winner) {
        if (winner === player.value) {
          state.value = WIN;
        } else {
          state.value = LOSE;
        }
      }

      if (isGameContinuable(game.value)) {
        toggleTurn();
      } else {
        state.value = DRAW;
      }
    }

    // Bot movement
    const botMove = async () => {
      // sleep for 2-5 second for realistic thinking effect :p
      await sleep(getRandomIntInclusive(2000, 5000));

      const fillPos = getFill(game.value);
      game.value[fillPos] = player.value === CIRCLE ? CROSS : CIRCLE;

      determineGameState();
    }

    // Fill the cell when clicked
    const fillCell = (index: number) => {
      if (turn.value !== player.value || game.value[index] !== '') {
        return;
      }

      game.value[index] = turn.value;
      determineGameState();
    }

    // Reset the game, if you want to try again
    const resetGame = () => {
      resetGameState();

      // force bot to move first if the player is circle
      if (turn.value !== player.value) {
        botMove();
      }
    }

    watch(turn, async (turn) => {
      if (turn !== player.value && state.value === IN_PROGRESS) {
        await botMove();
      }
    });

    resetGame();

    return {
      state,
      winner,
      player,
      game,
      turn,
      fillCell,
      toSplash,
      resetGame,
    };
  }
});
</script>

<template>
  <!-- start: Game Section -->
  <div class="mx-auto max-w-md">
    <!-- start: Game Board -->
    <div class="grid grid-cols-3 grid-rows-3 w-64 h-64 mx-auto game__board mb-6">
      <template v-for="(_, i) in 9" :key="game[i]">
        <cell :val="game[i]" @click="fillCell(i)" />
      </template>
    </div>
    <!-- end: Game Board -->

    <!-- start: Game State Board -->
    <section>
      <!-- start: Unfinished Game State -->
      <div class="text-center text-lg font-medium text-primary" v-if="state === 0">
        <p v-if="player === turn">
          It's your turn now!
        </p>

        <p v-else>
          Your opponent is making their move!
        </p>
      </div>
      <!-- end: Unfinished Game State -->

      <!-- start: Finished Game State -->
      <div class="font-semibold text-lg text-center" v-else>
        <!-- start: Winner State -->
        <p class="text-secondary" v-if="state === 1">
          Congratulations! You won!
          <a class="inline-block underline" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" rel="noreferrer" target="_blank">
            Click here to claim your prize
          </a>
        </p>
        <!-- end: Winner State -->

        <!-- start: Loser State -->
        <p class="text-red-600" v-else-if="state === -1">
          Well now, you lost 😥. Go cry in the corner.
        </p>
        <!-- end: Winner State -->

        <!-- start: Draw State -->
        <p class="text-primary" v-else>
          It seems the game ended up in a draw instead!
          <span class="inline-block">
            Good Job! Both of you!
          </span>
        </p>
        <!-- end: Draw State -->

        <!-- start: Navigational Buttons -->
        <div class="flex justify-between px-4 mt-4">
          <button @click="toSplash" class="bg-primary p-2 rounded-md text-white flex-1 mr-4">
            Back To Menu
          </button>
          <button @click="resetGame" class="bg-secondary p-2 rounded-md text-white flex-1 ml-4">
            Try Again
          </button>
        </div>
        <!-- end: Navigational Buttons -->
      </div>
      <!-- start: Finished Game State -->
      
    </section>
    <!-- end: Game State Board -->
  </div>
  <!-- end: Game Section -->
</template>

<style lang="postcss" scoped>
</style>