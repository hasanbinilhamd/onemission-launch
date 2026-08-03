<script setup lang="ts">
useHead({
  title: 'ONEMISSION',
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#06080A' },
  ],
  link: [
    { rel: 'preload', as: 'image', href: '/images/model-placeholder.svg', fetchpriority: 'high' },
  ],
});
</script>

<template>
  <main class="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#06080a] text-white">
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[linear-gradient(180deg,#030405_0%,#06080a_28%,#0d1216_58%,#1d2a32_100%)]"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(126,151,164,0.20),transparent_34rem),radial-gradient(circle_at_48%_18%,rgba(255,255,255,0.035),transparent_30rem)]"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.24),transparent_38%,transparent_62%,rgba(0,0,0,0.18)),linear-gradient(180deg,rgba(0,0,0,0.32),transparent_34%,rgba(0,0,0,0.10))]"
    />

    <header class="absolute left-6 top-6 z-30 sm:left-10 sm:top-8 lg:left-14">
      <div class="inline-flex items-center gap-2 text-white" aria-label="ONEMISSION">
        <svg class="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="8.5" stroke="currentColor" stroke-width="2" />
          <path d="M16 3.5v7M16 21.5v7M3.5 16h7M21.5 16h7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="m11.7 11.7 8.6 8.6M20.3 11.7l-8.6 8.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <span class="font-display text-xl font-black uppercase tracking-[-0.06em]">ONEMISSION</span>
      </div>
    </header>

    <div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4">
      <p class="select-none text-center font-display text-[22vw] font-black uppercase leading-[0.78] tracking-[-0.12em] text-white/[0.14] sm:text-[18vw] lg:text-[14vw]">
        Value<br>matters
      </p>
    </div>

    <div class="relative z-20 grid h-full grid-cols-1 lg:grid-cols-2">
      <section class="min-h-0" aria-hidden="true" />
      <section class="min-h-0" aria-hidden="true" />
    </div>

    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
      <img
        src="/images/model-placeholder.svg"
        alt=""
        width="520"
        height="900"
        fetchpriority="high"
        class="h-[60vh] max-h-[720px] min-h-[380px] w-auto object-contain opacity-90"
      >
    </div>
  </main>
</template>
