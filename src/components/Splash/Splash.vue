<script lang="ts">
import { defineComponent } from 'vue';
import { useConfig, useNavigator } from './../../store';
import { CIRCLE, CROSS } from './../../common';

export default defineComponent({
  name: 'Splash',

  setup() {
    const { player } = useConfig();
    const { toGame } = useNavigator();

    const players = [
      {
        name: 'As Cross',
        value: CROSS,
        desc: 'You will start first!'
      },
      {
        name: 'As Circle',
        value: CIRCLE,
        desc: 'You will start second!',
      },
    ];

    return {
      player,
      players,
      toGame,
    };
  },
});
</script>

<template>
  <!-- start: Splash Screen -->
  <div class="mx-auto max-w-md">
    <!-- start: Game Configuration -->
    <section class="flex justify-between text-lg text-center mb-8">
      <!-- start: Player Selection -->
      <div>
        <h2 class="text-left font-semibold text-xl mb-4">
          Play As
        </h2>

        <!-- start: Difficulty Checkbox -->
        <div>
          <label class="flex items-center my-2" v-for="playerChar in players" :key="playerChar.value">
            <input class="form-radio text-secondary w-6 h-6" type="radio" name="player" id="player" :value="playerChar.value" v-model="player" />
            <div class="text-left text-primary font-medium ml-4">
              <p>
                {{ playerChar.name }}
              </p>

              <p class="text-sm text-gray-500">
                {{ playerChar.desc }}
              </p>
            </div>
          </label>
        </div>
        <!-- end: Difficulty Checkbox -->
      </div>
      <!-- end: Player Selection -->
    </section>
    <!-- end: Game Configuration -->

    <!-- start: Game Controls -->
    <section class="flex justify-between">
      <button @click="toGame" class="text-center px-6 py-2 bg-secondary text-white rounded-md mr-2 flex-1">
        Start
      </button>
      
      <a
        class="twitter text-center px-6 py-2 rounded-md ml-2 flex-1"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet?text=Having%20a%20blast%20playing%20TikTakTu%0A%0APlay%20now%3A%20tik-tak-tu.vercel.app">
        Share on Twitter
      </a>
    </section>
    <!-- end: Game Controls -->
  </div>
  <!-- end: Splash Screen -->
</template>

<style lang="postcss" scoped>
.twitter {
  background: #1DA1F2;
  color: white;
}
</style>