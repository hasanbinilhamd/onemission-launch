<script setup lang="ts">
defineProps<{
  hijriDate: string;
  gregorianDate: string;
}>();
</script>

<template>
  <div class="glass-panel rounded-3xl px-5 py-4">
    <p class="font-chakra text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mutedgold/90">Launch Date</p>
    <div class="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <p class="font-display text-lg font-semibold text-bone sm:text-xl">{{ hijriDate }}</p>
      <p class="font-display text-sm text-white/54">{{ gregorianDate }}</p>
    </div>
  </div>
</template>
