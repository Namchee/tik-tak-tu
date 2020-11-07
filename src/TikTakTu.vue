<script lang="ts">
import { defineComponent } from 'vue';
import { useNavigator } from './store';

export default defineComponent({
  setup() {
    const { currentPage } = useNavigator();

    return {
      currentPage,
    };
  },
});
</script>

<template>
  <main class="font-sans w-screen h-screen py-16 px-32 leading-relaxed antialiased">
    <!-- start: Badass Heading -->
    <header class="text-center mb-12">
      <h1 class="font-semibold text-5xl leading-none heading">
        <span class="text-primary">Tik</span>
        <span class="text-secondary">Tak</span>
        <span class="text-primary">Tu</span>
      </h1>

      <h3 class="text-gray-400">
        by Namchee
      </h3>
    </header>
    <!-- end: Badass Heading -->

    <!-- start: Pseudo Router -->
    <component :is="currentPage" keep-alive />
    <!-- end: Pseudo Router -->
  </main>
</template>

<style lang="postcss" scoped>
.heading {
  @apply overflow-y-hidden;
}

.heading span {
  @apply relative inline-block;
  
  transform: translateY(7rem);
  animation: revealY 200ms cubic-bezier(0.25, 1, 0.5, 1) 500ms forwards;
}

.heading span:first-child {
  animation-delay: 0ms;
}

.heading span:last-child {
  animation-delay: 1000ms;
}

@keyframes revealY {
  100% {
    transform: translateY(0);
  }
}
</style>