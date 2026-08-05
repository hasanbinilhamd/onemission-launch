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
  <main class="vignette relative min-h-screen overflow-hidden bg-[#0A0A0A] lg:h-screen lg:min-h-0">
    <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_46%,rgba(83,104,120,0.52)_0%,rgba(83,104,120,0.26)_28%,transparent_58%),radial-gradient(ellipse_at_18%_78%,rgba(83,104,120,0.34)_0%,rgba(83,104,120,0.16)_30%,transparent_62%),radial-gradient(ellipse_at_48%_18%,rgba(229,228,226,0.13)_0%,rgba(229,228,226,0.055)_26%,transparent_56%),linear-gradient(135deg,#0A0A0A_0%,#10171c_42%,#293943_72%,#536878_145%)]" />

    <div class="relative z-[2] mx-auto flex min-h-screen w-full max-w-[1800px] flex-col px-5 py-6 sm:px-8 lg:h-screen lg:min-h-0 lg:px-16 lg:py-[clamp(1rem,2vh,1.5rem)]">
      <header class="flex items-center justify-between gap-6">
        <BrandMark />
        <div class="hidden items-center gap-6 sm:flex">
          <p class="font-chakra text-[0.72rem] font-bold uppercase tracking-[0.26em] text-bone/82">{{ launchConfig.headerTagline }}</p>
          <div class="h-6 w-px bg-white/18" />
          <SocialLinks :links="launchConfig.social" compact />
        </div>
      </header>

      <div class="grid flex-1 items-center gap-0 py-10 lg:grid-cols-[46fr_54fr] lg:py-[clamp(0.75rem,1.4vh,1.25rem)]">
        <section class="max-w-[43rem] space-y-5 lg:pt-[clamp(0.5rem,1.2vh,1rem)]">
          <!-- <div class="inline-flex items-center gap-3 rounded-2xl border border-[#E5E4E2]/[0.16] bg-[#E5E4E2]/[0.065] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm lg:px-4 lg:py-2.5">
            <span class="h-1.5 w-1.5 rounded-full bg-bone shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
            <p class="font-chakra text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-bone lg:text-[0.7rem]">{{ launchConfig.label }}</p>
          </div> -->

          <div class="space-y-5 lg:space-y-[clamp(0.75rem,1.3vh,1rem)]">
            <h1 class="whitespace-pre-line font-display text-[clamp(4.5rem,8.8vw,8.8rem)] font-semibold lowercase leading-[0.78] tracking-[-0.05em] text-bone drop-shadow-[0_18px_40px_rgba(0,0,0,0.24)] lg:text-[clamp(3.9rem,7.5vw,7.5rem)]">
              {{ launchConfig.title }}
            </h1>
            <!-- <p class="max-w-[38rem] text-xl leading-8 text-white/78 sm:text-2xl sm:leading-9 lg:text-[clamp(1.05rem,1.45vw,1.35rem)] lg:leading-[1.38]">{{ launchConfig.subtitle }}</p> -->
          </div>

          <LaunchDate :eyebrow="launchConfig.eyebrow" :hijri-date="launchConfig.hijriDate" :gregorian-date="launchConfig.gregorianDate" />
          <Countdown :launch-date="launchConfig.launchDate" />
          <NotifyForm :placeholder="launchConfig.notifyPlaceholder" :caption="launchConfig.notifyCaption" />
          <!-- <FeatureHighlights :features="launchConfig.features" /> -->
        </section>

        <section class="relative min-h-[520px] lg:min-h-[620px]">
          <HeroSlider :slides="launchConfig.heroSlides" />
        </section>
      </div>

      <div class="space-y-5 sm:flex lg:block sm:justify-center">
        <LaunchOfferStrip :offers="launchConfig.launchOffers" />
        <div class="flex items-center justify-between gap-4 sm:hidden">
          <SocialLinks :links="launchConfig.social" compact />
          <a :href="`mailto:${launchConfig.contactEmail}`" class="text-xs text-white/40">{{ launchConfig.contactEmail }}</a>
        </div>
      </div>
    </div>
  </main>
</template>
