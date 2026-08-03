<script setup lang="ts">
import type { LaunchOffer } from '~/launch.config';

defineProps<{
  offers: LaunchOffer[];
}>();
</script>

<template>
  <section class="rounded-2xl border border-[#E5E4E2]/[0.14] bg-[#E5E4E2]/[0.06] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_58px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:px-6">
    <div class="grid gap-5 lg:grid-cols-3 lg:divide-x lg:divide-white/[0.08]">
      <article v-for="offer in offers" :key="offer.title" class="flex items-center gap-5 lg:px-6 first:lg:pl-0 last:lg:pr-0">
        <div class="h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-[#E5E4E2]/[0.08]">
          <img :src="offer.image" :alt="offer.alt" class="h-full w-full object-cover opacity-90" loading="lazy">
        </div>
        <div>
          <h2 class="font-chakra text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-bone">{{ offer.title }}</h2>
          <p class="mt-2 max-w-[16rem] text-sm leading-6 text-white/62">{{ offer.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
