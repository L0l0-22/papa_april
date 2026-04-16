'use client'

import LetsConnect from '@/components/about/LetsConnect'
import Hero from '@/components/home/Hero'
import Faq from '@/components/services/Faq'
import Solution from '@/components/services/Solution'
import Strategy from '@/components/services/Strategy'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Page() {
  const t = useTranslations('servicesPage')
  return (
    <div>
      <Hero
        backgroundImage="/services.webp"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        buttonLabel={t('hero.button')}
        buttonLink="/contact"
      />

      {/* <Solution /> */}

      {/* STRATEGY #1 */}
      <Strategy
        heading={t('strategy.training.heading')}
        description={t('strategy.training.description')}
        items={[
          t('strategy.training.items.1'),
          t('strategy.training.items.2'),
          t('strategy.training.items.3'),
          t('strategy.training.items.4'),
        ]}
        image="/strategy.webp"
                bg="bg-white"
      />

      {/* STRATEGY #2 */}
      <Strategy
        heading={t('strategy.why.heading')}
        description={t('strategy.why.description')}
        items={[
          t('strategy.why.items.1'),
          t('strategy.why.items.2'),
          t('strategy.why.items.3'),
          t('strategy.why.items.4'),
        ]}
        image="/data-analytics.webp"
        imageLeft
        extraText={t('strategy.why.extraText')}
      />

      <Faq />
      <LetsConnect />
    </div>
  )
}
