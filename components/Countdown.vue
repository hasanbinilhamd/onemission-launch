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

    <div v-else class="flex w-full items-stretch gap-1.5 sm:gap-3">
      <template v-for="(unit, index) in units" :key="unit.label">
        <div
          class="
            flex-1 min-w-0
            rounded-xl
            border border-[#E5E4E2]/[0.16]
            bg-[#E5E4E2]/[0.075]
            px-2 py-2.5
            text-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_14px_34px_rgba(0,0,0,0.14)]
            backdrop-blur-sm

            sm:flex-none
            sm:w-[6.7rem]
            sm:px-3
            sm:py-4

            lg:w-[5.7rem]
            lg:py-3
          "
        >
          <p
            class="
              font-display
              text-[1.55rem]
              font-medium
              leading-none
              tracking-[-0.04em]
              text-bone

              sm:text-3xl
              lg:text-[clamp(1.55rem,1.8vw,1.7rem)]
            "
          >
            {{ padValue(unit.value) }}
          </p>

          <p
            class="
              mt-1.5
              font-chakra
              text-[0.48rem]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white/68

              sm:mt-2
              sm:text-[0.58rem]

              lg:mt-1.5
              lg:text-[0.52rem]
            "
          >
            {{ unit.label }}
          </p>
        </div>

        <!-- Separator -->
        <div
          v-if="index < units.length - 1"
          class="
            hidden
            sm:flex
            items-center
            font-display
            text-3xl
            text-bone/70
          "
        >
          :
        </div>
      </template>
    </div>
  </section>
</template>
