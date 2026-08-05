<script setup lang="ts">
import type { LaunchToastType } from '~/composables/useLaunchToast';

const { toast, closeToast } = useLaunchToast();

const iconMap: Record<LaunchToastType, string> = {
  success: '✓',
  error: '⚠',
  validation: '!',
  duplicate: 'ℹ',
};

const accentClassMap: Record<LaunchToastType, string> = {
  success: 'border-emerald-400/25 text-emerald-300 bg-emerald-400/10',
  error: 'border-red-400/25 text-red-300 bg-red-400/10',
  validation: 'border-orange-400/25 text-orange-300 bg-orange-400/10',
  duplicate: 'border-sky-400/25 text-sky-300 bg-sky-400/10',
};
</script>

<template>
  <Teleport to="body">
    <div class="pointer-events-none fixed left-1/2 top-5 z-[100] w-[calc(100vw-2rem)] max-w-[360px] -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0">
      <Transition name="launch-toast">
        <div
          v-if="toast"
          class="pointer-events-auto flex gap-3 rounded-[18px] border border-[#E5E4E2]/[0.12] bg-[rgba(20,20,20,0.75)] p-4 text-bone shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-[16px]"
          role="status"
          aria-live="polite"
        >
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold"
            :class="accentClassMap[toast.type]"
          >
            {{ iconMap[toast.type] }}
          </div>

          <div class="min-w-0 flex-1">
            <p class="font-display text-sm font-semibold leading-5 text-bone">{{ toast.title }}</p>
            <p class="mt-1 text-sm leading-5 text-white/62">{{ toast.message }}</p>
          </div>

          <button
            type="button"
            class="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/44 transition hover:bg-white/10 hover:text-bone focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Dismiss notification"
            @click="closeToast"
          >
            ×
          </button>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.launch-toast-enter-active,
.launch-toast-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
}

.launch-toast-enter-from,
.launch-toast-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.launch-toast-enter-to,
.launch-toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
