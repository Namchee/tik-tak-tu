<script lang="ts">
import { defineComponent } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { NOOB, IMPOSSIBRU } from './../../common';

export default defineComponent({
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },

  setup() {
    const difficulties = [
      {
        name: 'Noob',
        value: NOOB,
        desc: 'EZ dude, useful for kiddos alike',
      },
      {
        name: 'Impossibru',
        value: IMPOSSIBRU,
        desc: 'No, you can\'t win this one!'
      },
    ];


  },
});
</script>

<template>
  <!-- start: Splash Screen -->
  <div>
    <!-- start: Game Configuration -->
    <section class="text-lg text-center mx-auto max-w-md mb-8">
      <!-- start: Difficulty Settings -->
      <div class="flex justify-between items-center mb-4">
        <p>
          Game Difficulty
        </p>

        <!-- start: Difficulty Dropdown -->
        
        <!-- end: Difficulty Dropdown -->
      </div>
      <!-- end: Difficulty Settings -->

      <!-- start: Play As Select -->
      <div class=" flex justify-between items-center">
        <p>
          Play As
        </p>

        <!-- start: Play As Dropdown -->
        
        <!-- end: Play As Dropdown -->
      </div>
      <!-- end: Play As Select -->
    </section>
    <!-- end: Game Configuration -->

    <!-- start: Game Controls -->
    <section class="flex justify-between mx-auto max-w-md">
      <button class="text-center px-6 py-2 bg-secondary text-white rounded-md mr-2 flex-1">
        Start
      </button>
      
      <a
        class="twitter text-center px-6 py-2 rounded-md ml-2 flex-1"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet?text=I%27m%20Currently%20Playing%20TikTakTu%21%0A%0APlay%20Now%3A%20gofuckyourself.dev">
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