<script setup lang="ts">
import type { LaunchOffer } from '~/launch.config';

defineProps<{
  offers: LaunchOffer[];
}>();
</script>

<template>
  <section class="rounded-2xl w-fit border border-[#E5E4E2]/[0.14] bg-[#E5E4E2]/[0.06] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_58px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:px-6 lg:py-3">
    <div class="grid gap-5 lg:gap-4 lg:divide-x lg:divide-white/[0.08]">
      <article v-for="offer in offers" :key="offer.title" class="flex items-center gap-5 lg:gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0">
        <div class="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-bone lg:h-16 lg:w-24">
          <img :src="offer.image" :alt="offer.alt" :class="offer.title === 'Limited Drop' ? 'object-cover' : 'object-contain'" class="h-full w-full opacity-90" loading="lazy">
        </div>
        <div>
          <h2 class="font-chakra text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-bone lg:text-[0.68rem]">{{ offer.title }}</h2>
          <p class="mt-2 max-w-[16rem] text-sm leading-6 text-white/62 lg:mt-1.5 lg:text-[0.8rem] lg:leading-5">{{ offer.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
