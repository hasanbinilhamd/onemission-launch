<script setup lang="ts">
defineProps<{
  eyebrow: string;
  hijriDate: string;
  gregorianDate: string;
}>();
</script>

<template>
  <div class="space-y-2">
    <p class="flex items-center gap-2 font-chakra text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white/74">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.7" />
        <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
      </svg>
      {{ eyebrow }}
    </p>
    <p class="font-display text-[clamp(2.4rem,5vw,4.3rem)] font-light leading-none tracking-[-0.08em] text-bone">{{ hijriDate }}</p>
    <p class="font-display text-lg text-white/44 sm:text-xl">{{ gregorianDate }}</p>
  </div>
</template>
