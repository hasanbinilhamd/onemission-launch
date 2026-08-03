<script setup lang="ts">
import type { SocialLink } from '~/launch.config';

defineProps<{
  links: SocialLink[];
}>();
</script>

<template>
  <nav aria-label="Social links" class="flex flex-wrap items-center gap-4">
    <a
      v-for="link in links"
      :key="link.label"
      :href="link.href"
      class="font-chakra text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42 transition duration-300 hover:text-bone"
      rel="noopener noreferrer"
      target="_blank"
    >
      {{ link.label }}
    </a>
  </nav>
</template>
