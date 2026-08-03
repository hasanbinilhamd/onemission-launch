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
const modules = [Autoplay, EffectFade];

const activeSlide = computed(() => props.slides[activeIndex.value] ?? props.slides[0]);
const previousSlide = computed(() => props.slides[(activeIndex.value - 1 + props.slides.length) % props.slides.length] ?? props.slides[0]);
const nextSlide = computed(() => props.slides[(activeIndex.value + 1) % props.slides.length] ?? props.slides[0]);
</script>

<template>
  <section class="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">
    <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_48%_28%,rgba(229,228,226,0.14),transparent_21rem)]" />

    <div class="absolute left-0 top-[24%] z-[1] hidden h-[30rem] w-[16rem] overflow-hidden rounded-2xl border border-[#E5E4E2]/[0.14] bg-[#E5E4E2]/[0.075] opacity-70 shadow-[0_20px_58px_rgba(0,0,0,0.20)] transition-opacity duration-500 lg:block">
      <img :src="previousSlide.image" :alt="previousSlide.alt" class="h-full w-full object-contain p-8 opacity-78 blur-[0.45px] transition-opacity duration-500" loading="eager">
    </div>
    <div class="absolute right-0 top-[24%] z-[1] hidden h-[30rem] w-[16rem] overflow-hidden rounded-2xl border border-[#E5E4E2]/[0.14] bg-[#E5E4E2]/[0.075] opacity-70 shadow-[0_20px_58px_rgba(0,0,0,0.20)] transition-opacity duration-500 lg:block">
      <img :src="nextSlide.image" :alt="nextSlide.alt" class="h-full w-full object-contain p-8 opacity-78 blur-[0.45px] transition-opacity duration-500" loading="eager">
    </div>

    <div class="relative z-[3] mx-auto h-[34rem] max-w-[25rem] overflow-hidden rounded-[1.6rem] border border-[#E5E4E2]/[0.22] bg-gradient-to-b from-[#E5E4E2]/[0.18] via-[#536878]/[0.13] to-[#E5E4E2]/[0.07] shadow-[0_30px_78px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm sm:h-[39rem] sm:max-w-[28rem] lg:h-[45rem]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(229,228,226,0.27),transparent_13rem),linear-gradient(180deg,rgba(229,228,226,0.10),rgba(10,10,10,0.10))]" />
      <Swiper
        class="relative z-[2] h-full"
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        effect="fade"
        :speed="650"
        :allow-touch-move="false"
        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        @slide-change="activeIndex = $event.realIndex"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="slide.id">
          <div class="flex h-full items-center justify-center px-8 pb-28 pt-10">
            <img
              :src="slide.image"
              :alt="slide.alt"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              width="900"
              height="1100"
              class="max-h-[78%] w-[76%] object-contain drop-shadow-[0_42px_56px_rgba(0,0,0,0.46)]"
            >
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="absolute bottom-7 left-7 right-7 z-[4] flex items-end justify-between gap-4">
        <div>
          <p class="font-chakra text-sm font-semibold uppercase tracking-[0.12em] text-bone">{{ activeSlide.productName }}</p>
          <p class="mt-2 text-sm text-white/48">{{ activeSlide.color }}</p>
        </div>
        <div class="text-right">
          <p class="font-display text-lg tracking-[0.12em] text-bone/90">{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}</p>
          <div class="mt-3 flex justify-end gap-1">
            <span v-for="slide in slides" :key="slide.id" class="h-px w-7 bg-white/25" :class="slide.id === activeSlide.id ? 'bg-bone' : ''" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
