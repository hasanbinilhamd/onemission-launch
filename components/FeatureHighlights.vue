<script setup lang="ts">
import type { FeatureItem } from '~/launch.config';

defineProps<{
  features: FeatureItem[];
}>();
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div v-for="feature in features" :key="feature.title" class="flex items-center gap-3">
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/24 text-bone/86">
        <svg v-if="feature.icon === 'shield'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3 19 6v5c0 4.5-2.7 8-7 10-4.3-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" stroke-width="1.6" />
          <path d="m8.5 12 2.1 2.1 4.9-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-else-if="feature.icon === 'performance'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 17c3.5-7 8.5-10.5 16-10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" stroke-width="1.6" />
        </svg>
        <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3 15 9l6 .9-4.5 4.3 1 6.1L12 17.4 6.5 20.3l1-6.1L3 9.9 9 9l3-6Z" stroke="currentColor" stroke-width="1.45" stroke-linejoin="round" />
        </svg>
      </div>
      <div>
        <p class="text-sm font-semibold text-bone">{{ feature.title }}</p>
        <p class="mt-1 text-sm text-white/45">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>
