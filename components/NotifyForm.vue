<script setup lang="ts">
defineProps<{
  placeholder: string;
}>();

const email = ref('');
const message = ref('');

function submit() {
  const normalized = email.value.trim();
  if (!normalized || !normalized.includes('@')) {
    message.value = 'Please enter a valid email.';
    return;
  }

  message.value = 'You are on the mission list.';
  email.value = '';
}
</script>

<template>
  <form class="space-y-3" @submit.prevent="submit">
    <div class="glass-panel flex overflow-hidden rounded-full p-1">
      <input
        v-model="email"
        type="email"
        autocomplete="email"
        :placeholder="placeholder"
        aria-label="Email address"
        class="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-bone outline-none placeholder:text-white/34"
      >
      <button
        type="submit"
        class="rounded-full bg-bone px-5 py-3 font-chakra text-[0.68rem] font-bold uppercase tracking-[0.18em] text-charcoal transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-mutedgold/60"
      >
        Notify Me
      </button>
    </div>
    <p v-if="message" class="px-2 text-xs text-white/54" role="status">{{ message }}</p>
  </form>
</template>
