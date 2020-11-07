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
  <main class="font-sans w-screen h-screen p-32 leading-relaxed antialiased">
    <!-- start: Badass Heading -->
    <header class="text-center mb-12">
      <h1 class="font-semibold text-5xl">
        <span class="text-primary">Tik</span>
        <span class="text-secondary">Tak</span>
        <span class="text-primary">Tu</span>
      </h1>
    </header>
    <!-- end: Badass Heading -->

    <!-- start: Pseudo Router -->
    <component :is="currentPage" />
    <!-- end: Pseudo Router -->
  </main>
</template>

<style lang="postcss" scoped>
</style>