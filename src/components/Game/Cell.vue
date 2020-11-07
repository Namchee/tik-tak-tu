<script lang="ts">
import { defineComponent, computed } from 'vue';
import { CIRCLE, CROSS, DRAW, IN_PROGRESS } from '../../common';
import { useConfig, useGameState } from '../../store';

export default defineComponent({
  props: {
    val: {
      type: String,
      default: '',
      validator: (val: string) => {
        return [CROSS, CIRCLE, ''].includes(val);
      },
    },
  },

  setup({ val }) {
    const { turn, state } = useGameState();
    const { player } = useConfig();

    const getHoverableClass = computed(() => {
      return {
        'cursor-pointer': (turn.value === player.value && val.length === 0 && state.value === IN_PROGRESS),
        'cursor-not-allowed': (turn.value !== player.value || val.length > 0 || state.value === DRAW),
        'hover:bg-gray-200': (turn.value === player.value && val.length === 0 && state.value === IN_PROGRESS),
      };
    });

    return {
      getHoverableClass,
      CIRCLE,
      CROSS,
    };
  },
});
</script>

<template>
  <!-- start: Board Cell -->
  <div
    :class="getHoverableClass"
    class="flex justify-center items-center border border-gray-500 transition-colors duration-200 ease-linear">
    <svg v-if="val === CIRCLE" class="w-12 h-12 text-red-600 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="draw__o" cx="26" cy="26" r="25" fill="none" />
    </svg>
    <svg v-else-if="val === CROSS" class="w-20 h-20 text-blue-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52" stroke="currentColor">
      <path class="draw__x" fill="none" d="M16 16 36 36 M36 16 16 36" />
    </svg>
  </div>
  <!-- end: Board Cell -->
</template>

<style lang="postcss" scoped>
.draw__x {
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 29;
  stroke-dashoffset: 29;
  animation: draw 500ms ease forwards;
}

.draw__o {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 4;
  stroke-linecap: round;
  animation: draw 500ms ease forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>