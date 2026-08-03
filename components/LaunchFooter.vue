<script setup lang="ts">
defineProps<{
  email: string;
}>();
</script>

<template>
  <footer class="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/36 sm:flex-row sm:items-center sm:justify-between">
    <p>© {{ new Date().getFullYear() }} ONEMISSION. All rights reserved.</p>
    <a :href="`mailto:${email}`" class="transition hover:text-bone">{{ email }}</a>
  </footer>
</template>
