<script setup lang="ts">
defineProps<{
  placeholder: string;
  caption: string;
}>();

const runtimeConfig = useRuntimeConfig();
const phone = ref('');
const message = ref('');
const isSubmitting = ref(false);

function isLikelyPhone(value: string) {
  const compact = value.trim().replace(/[\s().-]/g, '');
  return /^(?:\+?62|0)8\d{7,13}$/.test(compact);
}

async function submit() {
  const normalized = phone.value.trim();
  if (!isLikelyPhone(normalized)) {
    message.value = 'Masukkan nomor WhatsApp yang valid.';
    return;
  }

  isSubmitting.value = true;
  message.value = '';

  try {
    const response = await fetch(runtimeConfig.public.launchSubscribeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: normalized }),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      message.value = 'Masukkan nomor WhatsApp yang valid.';
      return;
    }

    if (result?.duplicate) {
      message.value = 'Nomor Anda sudah terdaftar.';
      return;
    }

    phone.value = '';
    message.value = 'Terima kasih! Kami akan menghubungi Anda saat OneMission resmi diluncurkan.';
  } catch {
    message.value = 'Gagal menghubungi server. Silakan coba lagi.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <form class="space-y-3 lg:space-y-2" @submit.prevent="submit">
    <p class="text-sm leading-6 text-white/72 lg:text-[0.8rem] lg:leading-5">{{ caption }}</p>
    <div class="flex overflow-hidden rounded-2xl border border-[#E5E4E2]/[0.16] bg-[#E5E4E2]/[0.075] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur-sm">
      <input
        v-model="phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        :placeholder="placeholder"
        aria-label="Nomor WhatsApp"
        class="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-bone outline-none placeholder:text-white/34 lg:py-2.5 lg:text-[0.82rem]"
      >
      <button
        type="submit"
        :disabled="isSubmitting"
        class="inline-flex items-center gap-3 rounded-xl bg-bone px-4 py-3 font-chakra text-[0.62rem] font-bold uppercase tracking-[0.12em] text-charcoal transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-mutedgold/60 disabled:cursor-not-allowed disabled:opacity-70 sm:px-5 lg:py-2.5 lg:text-[0.56rem]"
      >
        {{ isSubmitting ? 'Mengirim...' : 'Beritahu Saya' }}
        <span class="text-base leading-none">›</span>
      </button>
    </div>
    <p v-if="message" class="px-2 text-xs text-white/60" role="status">{{ message }}</p>
  </form>
</template>
