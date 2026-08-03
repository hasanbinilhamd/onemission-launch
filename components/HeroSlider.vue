<script setup lang="ts">
import type { HeroSlide } from '~/launch.config';

type SlideRole = 'center' | 'left' | 'right' | 'back';

const props = defineProps<{
  slides: HeroSlide[];
}>();

const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
const DURATION = 650;
const AUTOPLAY_DELAY = 3000;

const activeIndex = ref(0);
const isPaused = ref(false);
const preloadedImages = new Set<string>();
let autoplayTimer: ReturnType<typeof window.setInterval> | null = null;

const activeSlide = computed(() => props.slides[activeIndex.value] ?? props.slides[0]);

function getSlideRole(index: number): SlideRole {
  const total = props.slides.length;
  if (total <= 1) return index === activeIndex.value ? 'center' : 'back';

  const relativeIndex = (index - activeIndex.value + total) % total;
  if (relativeIndex === 0) return 'center';
  if (relativeIndex === 1) return 'right';
  if (relativeIndex === total - 1) return 'left';
  return 'back';
}

function getSlideStyle(role: SlideRole) {
  const baseTransition = `transform ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}, filter ${DURATION}ms ${EASE}`;

  switch (role) {
    case 'center':
      return {
        left: '50%',
        top: '0',
        width: 'min(40vw, 28rem)',
        height: 'min(45rem, 100%)',
        opacity: 1,
        zIndex: 30,
        transform: 'translate3d(-50%, 0, 0) scale(1)',
        filter: 'blur(0px)',
        background: 'linear-gradient(180deg, rgba(229,228,226,0.18), rgba(83,104,120,0.13) 46%, rgba(229,228,226,0.07) 100%)',
        borderColor: 'rgba(229,228,226,0.22)',
        boxShadow: '0 30px 78px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.18)',
        transition: baseTransition,
      };
    case 'left':
      return {
        left: 'calc(50% - min(20vw, 14rem) - min(7vw, 6.5rem) - 1rem)',
        top: '12%',
        width: 'min(14vw, 13rem)',
        height: 'min(30rem, 68%)',
        opacity: 0.74,
        zIndex: 10,
        transform: 'translate3d(-50%, 0, 0) scale(0.96)',
        filter: 'blur(0.45px)',
        background: 'rgba(229,228,226,0.075)',
        borderColor: 'rgba(229,228,226,0.14)',
        boxShadow: '0 20px 58px rgba(0,0,0,0.20)',
        transition: baseTransition,
      };
    case 'right':
      return {
        left: 'calc(50% + min(20vw, 14rem) + min(7vw, 6.5rem) + 1rem)',
        top: '12%',
        width: 'min(14vw, 13rem)',
        height: 'min(30rem, 68%)',
        opacity: 0.74,
        zIndex: 10,
        transform: 'translate3d(-50%, 0, 0) scale(0.96)',
        filter: 'blur(0.45px)',
        background: 'rgba(229,228,226,0.075)',
        borderColor: 'rgba(229,228,226,0.14)',
        boxShadow: '0 20px 58px rgba(0,0,0,0.20)',
        transition: baseTransition,
      };
    case 'back':
    default:
      return {
        left: '50%',
        top: '16%',
        width: '12rem',
        height: '26rem',
        opacity: 0,
        zIndex: 1,
        transform: 'translate3d(-50%, 0, 0) scale(0.9)',
        filter: 'blur(1.5px)',
        transition: baseTransition,
      };
  }
}

function preloadImage(src: string) {
  const imageUrl = String(src || '').trim();
  if (!imageUrl || preloadedImages.has(imageUrl) || typeof window === 'undefined') return;

  const image = new Image();
  image.src = imageUrl;
  preloadedImages.add(imageUrl);
}

function preloadVisibleImages() {
  if (props.slides.length === 0) return;
  const total = props.slides.length;
  const indexes = new Set([
    activeIndex.value,
    (activeIndex.value + 1) % total,
    (activeIndex.value + total - 1) % total,
  ]);

  indexes.forEach((index) => {
    const slide = props.slides[index];
    if (slide?.image) preloadImage(slide.image);
  });
}

function goToNextSlide() {
  if (props.slides.length <= 1 || isPaused.value) return;
  activeIndex.value = (activeIndex.value + 1) % props.slides.length;
}

function startAutoplay() {
  if (typeof window === 'undefined' || autoplayTimer || props.slides.length <= 1) return;
  autoplayTimer = window.setInterval(goToNextSlide, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (!autoplayTimer) return;
  window.clearInterval(autoplayTimer);
  autoplayTimer = null;
}

function handleMouseEnter() {
  isPaused.value = true;
}

function handleMouseLeave() {
  isPaused.value = false;
}

watch(activeIndex, preloadVisibleImages);
watch(() => props.slides, () => {
  activeIndex.value = 0;
  preloadVisibleImages();
}, { deep: false });

onMounted(() => {
  preloadVisibleImages();
  startAutoplay();
});

onBeforeUnmount(stopAutoplay);
</script>

<template>
  <section
    class="relative min-h-[520px] overflow-hidden lg:min-h-[720px]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_48%_28%,rgba(229,228,226,0.14),transparent_21rem)]" />

    <div class="relative z-[3] mx-auto h-[34rem] max-w-[46rem] sm:h-[39rem] lg:h-[45rem] lg:max-w-[56rem]">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="absolute hidden overflow-hidden rounded-2xl border border-[#E5E4E2]/[0.14] bg-[#E5E4E2]/[0.075] shadow-[0_20px_58px_rgba(0,0,0,0.20)] backdrop-blur-sm will-change-transform lg:block"
        :style="getSlideStyle(getSlideRole(index))"
        aria-hidden="true"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(229,228,226,0.18),transparent_11rem),linear-gradient(180deg,rgba(229,228,226,0.08),rgba(10,10,10,0.08))]" />
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="relative z-[2] h-full w-full object-contain p-8 opacity-90"
          draggable="false"
          loading="eager"
        >
      </div>

      <div class="relative z-[30] h-full w-full lg:hidden">
        <div class="relative mx-auto h-full max-w-[25rem] overflow-hidden rounded-[1.6rem] border border-[#E5E4E2]/[0.22] bg-gradient-to-b from-[#E5E4E2]/[0.18] via-[#536878]/[0.13] to-[#E5E4E2]/[0.07] shadow-[0_30px_78px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm sm:max-w-[28rem]">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(229,228,226,0.27),transparent_13rem),linear-gradient(180deg,rgba(229,228,226,0.10),rgba(10,10,10,0.10))]" />
          <img
            :src="activeSlide.image"
            :alt="activeSlide.alt"
            width="900"
            height="1100"
            fetchpriority="high"
            class="relative z-[2] h-full w-full object-contain px-8 pb-28 pt-10 drop-shadow-[0_42px_56px_rgba(0,0,0,0.46)]"
            draggable="false"
          >
        </div>
      </div>

      <div class="pointer-events-none absolute bottom-7 left-1/2 z-[40] flex w-[min(72vw,28rem)] -translate-x-1/2 items-end justify-between gap-4 px-7 lg:w-[min(72vw,28rem)]">
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
