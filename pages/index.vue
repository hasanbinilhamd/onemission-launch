<script setup lang="ts">
useHead({
  title: 'ONEMISSION',
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#0A0A0A' },
  ],
  link: [
    { rel: 'preload', as: 'image', href: '/images/model-placeholder.svg', fetchpriority: 'high' },
  ],
});
</script>

<template>
  <main class="relative min-h-[100svh] overflow-hidden bg-[#0A0A0A] text-white lg:h-screen lg:min-h-0">
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[linear-gradient(180deg,#0A0A0A_0%,#0b0d0f_28%,#131a1f_63%,#26343c_100%)]"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[radial-gradient(circle_at_52%_70%,rgba(83,104,120,0.36),transparent_34rem),radial-gradient(circle_at_54%_28%,rgba(229,228,226,0.075),transparent_30rem),radial-gradient(circle_at_18%_82%,rgba(83,104,120,0.14),transparent_24rem)]"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28),transparent_36%,transparent_64%,rgba(0,0,0,0.20)),linear-gradient(180deg,rgba(0,0,0,0.44),transparent_42%,rgba(0,0,0,0.10))]"
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
      <p class="select-none text-center font-display text-[21vw] font-black uppercase leading-[0.78] tracking-[-0.12em] text-white/[0.13] sm:text-[17vw] lg:text-[13.2vw]">
        Value<br>matters
      </p>
    </div>

    <div class="relative z-20 grid h-full min-h-[100svh] grid-cols-1 lg:h-screen lg:min-h-0 lg:grid-cols-2">
      <section class="min-h-0" aria-hidden="true" />
      <section class="min-h-0" aria-hidden="true" />
    </div>

    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-6">
      <div class="relative flex h-[60vh] max-h-[720px] min-h-[380px] w-[min(72vw,30rem)] items-end justify-center overflow-hidden rounded-[2rem] border border-[#E5E4E2]/[0.13] bg-[linear-gradient(180deg,rgba(229,228,226,0.13),rgba(83,104,120,0.12)_46%,rgba(10,10,10,0.03)_100%)] shadow-[0_34px_90px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(229,228,226,0.12)] backdrop-blur-[2px] lg:w-[min(30vw,30rem)]">
        <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(229,228,226,0.20),transparent_15rem),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_100%)]" />
        <img
          src="/images/model-placeholder.svg"
          alt=""
          width="520"
          height="900"
          fetchpriority="high"
          class="relative z-10 h-full w-auto object-contain object-bottom opacity-95"
        >
      </div>
    </div>
  </main>
</template>
