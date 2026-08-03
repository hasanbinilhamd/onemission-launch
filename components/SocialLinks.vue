<script setup lang="ts">
import type { SocialLink } from '~/launch.config';

defineProps<{
  links: SocialLink[];
  compact?: boolean;
}>();
</script>

<template>
  <nav aria-label="Social links" class="flex flex-wrap items-center gap-3 sm:gap-4">
    <a
      v-for="link in links"
      :key="link.label"
      :href="link.href"
      class="group inline-flex items-center gap-2 font-chakra text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/52 transition duration-300 hover:text-bone"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="link.label"
    >
      <svg v-if="link.icon === 'instagram'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="2" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
      <svg v-else-if="link.icon === 'tiktok'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.7 3c.35 2.35 1.65 3.78 4.02 3.93v3.05c-1.37.13-2.58-.31-3.94-1.15v5.7c0 7.24-7.9 9.5-11.08 4.31-2.05-3.35-.8-9.22 5.78-9.45v3.22c-.45.07-.94.18-1.38.33-1.32.45-2.07 1.29-1.86 2.77.4 2.83 5.6 3.67 5.17-1.86V3h3.29Z" />
      </svg>
      <svg v-else-if="link.icon === 'youtube'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.12C17.64 4.58 12 4.58 12 4.58s-5.64 0-7.5.5A3 3 0 0 0 2.4 7.2 31.4 31.4 0 0 0 1.9 12a31.4 31.4 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.12c1.86.5 7.5.5 7.5.5s5.64 0 7.5-.5a3 3 0 0 0 2.1-2.12 31.4 31.4 0 0 0 .5-4.8 31.4 31.4 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
      <span v-if="!compact">{{ link.label }}</span>
    </a>
  </nav>
</template>
