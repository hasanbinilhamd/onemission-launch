<script setup lang="ts">
import launchConfig from '~/launch.config';

const firstSlide = launchConfig.heroSlides[0];

useHead({
  title: launchConfig.seo.title,
  meta: [
    { name: 'description', content: launchConfig.seo.description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: launchConfig.seo.title },
    { property: 'og:description', content: launchConfig.seo.description },
    { property: 'og:url', content: launchConfig.canonicalUrl },
    { property: 'og:image', content: launchConfig.seo.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: launchConfig.seo.title },
    { name: 'twitter:description', content: launchConfig.seo.description },
    { name: 'twitter:image', content: launchConfig.seo.image },
    { name: 'theme-color', content: '#080A0C' },
  ],
  link: [
    { rel: 'canonical', href: launchConfig.canonicalUrl },
    { rel: 'preload', as: 'image', href: firstSlide.image, fetchpriority: 'high' },
  ],
});
</script>

<template>
  <main class="vignette relative min-h-screen overflow-hidden">
    <div aria-hidden="true" class="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-mutedgold/10 blur-3xl" />
    <div aria-hidden="true" class="absolute bottom-[6%] right-[12%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />

    <div class="relative z-[2] mx-auto grid min-h-screen w-full max-w-[1600px] gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[45fr_55fr] lg:gap-10 lg:px-10 lg:py-10">
      <section class="flex min-h-[54vh] flex-col justify-between gap-10 py-4 lg:min-h-0 lg:py-8">
        <div class="space-y-8">
          <div class="flex items-center justify-between gap-4">
            <p class="font-chakra text-[0.72rem] font-bold uppercase tracking-[0.42em] text-mutedgold">{{ launchConfig.label }}</p>
            <p class="font-chakra text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/34">ONEMISSION</p>
          </div>

          <div class="max-w-[42rem] space-y-5">
            <h1 class="font-display text-[clamp(3.4rem,9vw,7.2rem)] font-black uppercase leading-[0.86] tracking-[-0.095em] text-bone">
              {{ launchConfig.title }}
            </h1>
            <div class="max-w-xl space-y-3">
              <p class="font-display text-xl font-semibold leading-7 tracking-[-0.03em] text-white/82 sm:text-2xl">{{ launchConfig.subtitle }}</p>
              <p class="text-base leading-7 text-white/54 sm:text-lg">{{ launchConfig.description }}</p>
            </div>
          </div>

          <div class="grid max-w-xl gap-4">
            <LaunchDate :hijri-date="launchConfig.hijriDate" :gregorian-date="launchConfig.gregorianDate" />
            <Countdown :launch-date="launchConfig.launchDate" />
            <NotifyForm :placeholder="launchConfig.notifyPlaceholder" />
          </div>
        </div>

        <div class="space-y-6">
          <SocialLinks :links="launchConfig.social" />
          <LaunchFooter :email="launchConfig.contactEmail" />
        </div>
      </section>

      <section class="relative lg:py-0">
        <HeroSlider :slides="launchConfig.heroSlides" />
      </section>
    </div>
  </main>
</template>
