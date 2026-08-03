<script setup lang="ts">
import { useCountdown } from '~/composables/useCountdown';

const props = defineProps<{
  launchDate: string;
}>();

const countdown = useCountdown(props.launchDate);

const units = computed(() => [
  { label: 'Days', value: countdown.value.days },
  { label: 'Hours', value: countdown.value.hours },
  { label: 'Minutes', value: countdown.value.minutes },
  { label: 'Seconds', value: countdown.value.seconds },
]);

function padValue(value: number) {
  return String(value).padStart(2, '0');
}
</script>

<template>
  <section aria-label="Launch countdown">
    <div v-if="countdown.isLive" class="glass-panel rounded-3xl px-6 py-5 text-center">
      <p class="font-chakra text-sm font-semibold uppercase tracking-[0.35em] text-mutedgold">Now Live</p>
    </div>

    <div v-else class="grid grid-cols-4 gap-2 sm:gap-3">
      <div
        v-for="unit in units"
        :key="unit.label"
        class="glass-panel rounded-2xl px-2 py-4 text-center sm:rounded-3xl sm:px-4 sm:py-5"
      >
        <p class="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-bone sm:text-4xl">
          {{ padValue(unit.value) }}
        </p>
        <p class="mt-2 font-chakra text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/48 sm:text-[0.68rem]">
          {{ unit.label }}
        </p>
      </div>
    </div>
  </section>
</template>
