<script setup lang="ts">
defineProps<{
  eyebrow: string;
  hijriDate: string;
  gregorianDate: string;
}>();
</script>

<template>
  <div class="space-y-2 lg:space-y-1.5">
    <!-- <p class="flex items-center gap-2 font-chakra text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white/74 lg:text-[0.68rem]">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.7" />
        <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
      </svg>
      {{ eyebrow }}
    </p> -->
    <p class="font-display text-[clamp(2.4rem,5vw,4.3rem)] font-light leading-none tracking-[-0.04em] text-bone lg:text-[clamp(2.05rem,4.25vw,3.75rem)]">{{ hijriDate }}</p>
    <p class="font-display text-lg text-white/44 sm:text-xl lg:text-[clamp(0.95rem,1.15vw,1.1rem)]">{{ gregorianDate }}</p>
  </div>
</template>
