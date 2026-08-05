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
const orderedSlides = shallowRef<HeroSlide[]>([]);
const preloadedImages = new Set<string>();
let autoplayTimer: ReturnType<typeof window.setInterval> | null = null;

const carouselSlides = computed(() => (orderedSlides.value.length > 0 ? orderedSlides.value : props.slides));
const activeSlide = computed(() => carouselSlides.value[activeIndex.value] ?? carouselSlides.value[0]);

function shuffleSlides(slides: readonly HeroSlide[]) {
  const shuffled = [...slides];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function initializeSlideOrder() {
  if (orderedSlides.value.length > 0) return;
  orderedSlides.value = shuffleSlides(props.slides);
  activeIndex.value = 0;
}

function getSlideRole(index: number): SlideRole {
  const total = carouselSlides.value.length;
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
        width: 'min(35vw, 24rem)',
        height: 'min(38.5rem, 100%)',
        // opacity: 1,
        zIndex: 30,
        transform: 'translate3d(-50%, 0, 0) scale(1)',
        filter: 'blur(0px)',
        background: 'linear-gradient(180deg, rgba(229,228,226,0.80), rgba(83,104,120,0.60) 100%, rgba(229,228,226,0.60) 100%)',
        borderColor: 'rgba(229,228,226,0.22)',
        // boxShadow: '0 30px 78px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.18)',
        boxShadow:'0 18px 46px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.18)',
        transition: baseTransition,
      };
    case 'left':
      return {
        left: 'calc(50% - min(17.5vw, 12rem) - min(6vw, 5.5rem) + 1rem)',
        top: '12%',
        width: 'min(12vw, 11rem)',
        height: 'min(25rem, 64%)',
        opacity: 0.74,
        zIndex: 10,
        transform: 'translate3d(-50%, 0, 0) scale(0.96)',
        filter: 'blur(0.45px)',
        background: 'rgba(229,228,226,0.075)',
        borderColor: 'rgba(229,228,226,0.14)',
        // boxShadow: '0 20px 58px rgba(0,0,0,0.20)',
        boxShadow:'0 12px 34px rgba(0,0,0,.14)',
        transition: baseTransition,
      };
    case 'right':
      return {
        left: 'calc(50% + min(17.5vw, 12rem) + min(6vw, 5.5rem) - 1rem)',
        top: '12%',
        width: 'min(12vw, 11rem)',
        height: 'min(25rem, 64%)',
        opacity: 0.74,
        zIndex: 10,
        transform: 'translate3d(-50%, 0, 0) scale(0.96)',
        filter: 'blur(0.45px)',
        background: 'rgba(229,228,226,0.075)',
        borderColor: 'rgba(229,228,226,0.14)',
        // boxShadow: '0 20px 58px rgba(0,0,0,0.20)',
        boxShadow:'0 12px 34px rgba(0,0,0,.14)',
        transition: baseTransition,
      };
    case 'back':
    default:
      return {
        left: '50%',
        top: '16%',
        width: '10rem',
        height: '22rem',
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
  if (carouselSlides.value.length === 0) return;
  const total = carouselSlides.value.length;
  const indexes = new Set([
    activeIndex.value,
    (activeIndex.value + 1) % total,
    (activeIndex.value + total - 1) % total,
  ]);

  indexes.forEach((index) => {
    const slide = carouselSlides.value[index];
    if (slide?.image) preloadImage(slide.image);
  });
}

function goToNextSlide() {
  if (carouselSlides.value.length <= 1 || isPaused.value) return;
  activeIndex.value = (activeIndex.value + 1) % carouselSlides.value.length;
}

function startAutoplay() {
  if (typeof window === 'undefined' || autoplayTimer || carouselSlides.value.length <= 1) return;
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

onMounted(() => {
  initializeSlideOrder();
  preloadVisibleImages();
  startAutoplay();
});

onBeforeUnmount(stopAutoplay);
</script>

<template>
  <section
    class="relative min-h-[520px] overflow-hidden lg:min-h-[620px]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- <div
      aria-hidden="true"
      class="absolute inset-0 bg-[radial-gradient(circle_at_48%_28%,rgba(229,228,226,0.14),transparent_21rem)]"
    /> -->

    <!-- <div
      aria-hidden="true"
      class="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style="
        background:
          radial-gradient(circle,
          rgba(83,104,120,.22) 0%,
          rgba(83,104,120,.10) 38%,
          rgba(229,228,226,.04) 58%,
          transparent 78%);
        filter: blur(80px);
      "
    /> -->
    <div class="relative z-[3] mx-auto h-[34rem] max-w-[46rem] sm:h-[39rem] lg:h-[38.5rem] lg:max-w-[49rem]">
      <div
        v-for="(slide, index) in carouselSlides"
        :key="slide.id"
        class="absolute hidden overflow-hidden rounded-2xl border-[#E5E4E2]/[0.14] bg-[#E5E4E2]/[0.075] shadow-[0_20px_58px_rgba(0,0,0,0.20)] backdrop-blur-sm will-change-transform lg:block"
        :style="getSlideStyle(getSlideRole(index))"
        aria-hidden="true"
      >
        <div
        class="absolute inset-0
        bg-[radial-gradient(circle_at_50%_15%,rgba(229,228,226,0.22),transparent_12rem),
        linear-gradient(180deg,rgba(255,255,255,0.09),rgba(83,104,120,0.05),rgba(10,10,10,0.04))]"
        />
        <img
          v-if="getSlideRole(index) !== 'back'"
          :src="slide.image"
          :alt="slide.alt"
          class="relative z-[2] h-full w-full object-contain opacity-90"
          draggable="false"
          loading="eager"
        >
      </div>

      <div class="relative z-[30] h-full w-full lg:hidden rounded-[1.6rem]">
        <div class="relative mx-auto h-full max-w-[25rem] overflow-hidden rounded-[1.6rem] bg-transparent sm:max-w-[28rem]">
          <div class="absolute inset-0" />
          <img
            :src="activeSlide.image"
            :alt="activeSlide.alt"
            width="900"
            height="1100"
            fetchpriority="high"
            class="relative z-[2] h-full w-full drop-shadow-[0_42px_56px_rgba(0,0,0,0.46)] object-contain opacity-90"
            draggable="false"
          >
        </div>
      </div>

      <div class="pointer-events-none absolute bottom-7 left-1/2 z-[40] flex w-[min(72vw,28rem)] -translate-x-1/2 items-end justify-between gap-4 lg:bottom-6 lg:w-[min(35vw,24rem)] lg:px-6">
        <div>
          <p class="font-chakra text-sm font-semibold uppercase tracking-[0.12em] text-bone">{{ activeSlide.productName }}</p>
          <p class="mt-2 text-sm text-white/48">{{ activeSlide.color }}</p>
        </div>
        <div class="text-right">
          <p class="font-display text-lg tracking-[0.12em] text-bone/90">{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(carouselSlides.length).padStart(2, '0') }}</p>
          <!-- <div class="mt-3 flex justify-end gap-1">
            <span v-for="slide in carouselSlides" :key="slide.id" class="h-px w-7 bg-white/25" :class="slide.id === activeSlide.id ? 'bg-bone' : ''" />
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
