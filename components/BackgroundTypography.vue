<script setup lang="ts">
defineProps<{
  word: string;
}>();
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
    <p class="select-none font-display text-[18vw] font-black uppercase leading-none tracking-[-0.1em] text-white/[0.09] sm:text-[13vw]">
      {{ word }}
    </p>
  </div>
</template>
