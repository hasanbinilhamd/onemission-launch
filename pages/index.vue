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
    { name: 'theme-color', content: '#0A0A0A' },
  ],
  link: [
    { rel: 'canonical', href: launchConfig.canonicalUrl },
    { rel: 'preload', as: 'image', href: firstSlide.image, fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: launchConfig.heroSlides[1]?.image || firstSlide.image },
  ],
});
</script>

<template>
  <main class="vignette relative min-h-screen overflow-hidden lg:h-screen lg:min-h-0">
    <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_70%_48%,rgba(83,104,120,0.42),transparent_34rem),radial-gradient(circle_at_16%_72%,rgba(83,104,120,0.30),transparent_30rem),radial-gradient(circle_at_52%_18%,rgba(229,228,226,0.075),transparent_30rem),linear-gradient(135deg,#0A0A0A_0%,#11191f_50%,#31424c_100%)]" />
    <div aria-hidden="true" class="absolute left-[6%] top-[18%] h-80 w-80 rounded-full bg-[#E5E4E2]/[0.07] blur-3xl" />
    <div aria-hidden="true" class="absolute bottom-[7%] right-[18%] h-96 w-96 rounded-full bg-[#536878]/30 blur-3xl" />

    <div class="relative z-[2] mx-auto flex min-h-screen w-full max-w-[1800px] flex-col px-5 py-6 sm:px-8 lg:h-screen lg:min-h-0 lg:px-16 lg:py-9">
      <header class="flex items-center justify-between gap-6">
        <BrandMark />
        <div class="hidden items-center gap-6 sm:flex">
          <p class="font-chakra text-[0.72rem] font-bold uppercase tracking-[0.26em] text-bone/82">{{ launchConfig.headerTagline }}</p>
          <div class="h-6 w-px bg-white/18" />
          <SocialLinks :links="launchConfig.social" compact />
        </div>
      </header>

      <div class="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[46fr_54fr] lg:gap-10 lg:py-8">
        <section class="max-w-[43rem] space-y-8 lg:pt-8">
          <div class="inline-flex items-center gap-3 rounded-2xl border border-[#E5E4E2]/[0.16] bg-[#E5E4E2]/[0.065] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm">
            <span class="h-1.5 w-1.5 rounded-full bg-bone shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
            <p class="font-chakra text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-bone">{{ launchConfig.label }}</p>
          </div>

          <div class="space-y-5">
            <h1 class="whitespace-pre-line font-display text-[clamp(4.5rem,8.8vw,8.8rem)] font-black uppercase leading-[0.78] tracking-[-0.095em] text-bone drop-shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
              {{ launchConfig.title }}
            </h1>
            <p class="max-w-[38rem] text-xl leading-8 text-white/78 sm:text-2xl sm:leading-9">{{ launchConfig.subtitle }}</p>
          </div>

          <LaunchDate :eyebrow="launchConfig.eyebrow" :hijri-date="launchConfig.hijriDate" :gregorian-date="launchConfig.gregorianDate" />
          <Countdown :launch-date="launchConfig.launchDate" />
          <NotifyForm :placeholder="launchConfig.notifyPlaceholder" :caption="launchConfig.notifyCaption" />
          <FeatureHighlights :features="launchConfig.features" />
        </section>

        <section class="relative min-h-[520px] lg:min-h-[720px]">
          <HeroSlider :slides="launchConfig.heroSlides" />
        </section>
      </div>

      <div class="space-y-5">
        <LaunchOfferStrip :offers="launchConfig.launchOffers" />
        <div class="flex items-center justify-between gap-4 sm:hidden">
          <SocialLinks :links="launchConfig.social" compact />
          <a :href="`mailto:${launchConfig.contactEmail}`" class="text-xs text-white/40">{{ launchConfig.contactEmail }}</a>
        </div>
      </div>
    </div>
  </main>
</template>
