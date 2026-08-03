<script setup lang="ts">
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import type { HeroSlide } from '~/launch.config';

const props = defineProps<{
  slides: HeroSlide[];
}>();

const activeIndex = ref(0);
const activeSlide = computed(() => props.slides[activeIndex.value] ?? props.slides[0]);

const modules = [Autoplay, EffectFade];
</script>

<template>
  <section class="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-glow lg:min-h-[720px] lg:rounded-[2.5rem]">
    <BackgroundTypography :word="activeSlide?.backgroundWord || 'Movement'" />

    <div class="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_55%_40%,rgba(255,255,255,0.16),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))]" />
    <div class="absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

    <Swiper
      class="relative z-[2] h-full min-h-[520px] lg:min-h-[720px]"
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      effect="fade"
      :speed="650"
      :allow-touch-move="false"
      :autoplay="{ delay: 2600, disableOnInteraction: false }"
      @slide-change="activeIndex = $event.realIndex"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="slide.id">
        <div class="relative flex h-full min-h-[520px] items-center justify-center px-6 py-10 lg:min-h-[720px]">
          <img
            :src="slide.image"
            :alt="slide.alt"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            width="900"
            height="1100"
            class="max-h-[72%] w-[74%] max-w-[540px] object-contain drop-shadow-[0_48px_60px_rgba(0,0,0,0.5)] transition duration-300 md:w-[70%]"
          >
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="pointer-events-none absolute bottom-6 left-6 right-6 z-[3] flex items-end justify-between gap-4">
      <div>
        <p class="font-chakra text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-mutedgold/90">{{ activeSlide?.collectionLabel }}</p>
        <p class="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-bone">{{ activeSlide?.productName }}</p>
      </div>
      <p class="hidden max-w-[10rem] text-right text-xs leading-5 text-white/42 sm:block">Designed for controlled intensity and purposeful movement.</p>
    </div>
  </section>
</template>
