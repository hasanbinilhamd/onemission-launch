<script setup lang="ts">
import { useCountdown } from '~/composables/useCountdown';

const props = defineProps<{
  launchDate: string;
}>();

const countdown = useCountdown(props.launchDate);

const units = computed(() => [
  { label: 'Hari', value: countdown.value.days },
  { label: 'Jam', value: countdown.value.hours },
  { label: 'Menit', value: countdown.value.minutes },
  { label: 'Detik', value: countdown.value.seconds },
]);

function padValue(value: number) {
  return String(value).padStart(2, '0');
}
</script>

<template>
  <section aria-label="Launch countdown">
    <div v-if="countdown.isLive" class="glass-panel rounded-2xl px-6 py-5 text-center">
      <p class="font-chakra text-sm font-semibold uppercase tracking-[0.35em] text-bone">Now Live</p>
    </div>

    <div v-else class="flex items-stretch gap-2 sm:gap-3">
      <template v-for="(unit, index) in units" :key="unit.label">
        <div class="w-[5.9rem] rounded-xl border border-white/[0.07] bg-black/28 px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:w-[6.7rem] sm:py-4">
          <p class="font-display text-2xl font-medium leading-none tracking-[-0.04em] text-bone sm:text-3xl">
            {{ padValue(unit.value) }}
          </p>
          <p class="mt-2 font-chakra text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/68">
            {{ unit.label }}
          </p>
        </div>
        <div v-if="index < units.length - 1" class="flex items-center font-display text-3xl text-bone/70">:</div>
      </template>
    </div>
  </section>
</template>
