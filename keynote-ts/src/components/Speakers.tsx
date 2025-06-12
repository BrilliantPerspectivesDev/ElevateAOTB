'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const speakers = eventContent.speakers;

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')
    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }
    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)
    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-24 sm:py-36"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-bold tracking-tighter text-ochre sm:text-5xl"
          >
            {speakers.headline}
          </h2>
          <p className="mt-6 font-display text-2xl tracking-tight text-celadon">
            {speakers.subheading}
          </p>
        </div>
        <div className="mt-20 flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-stretch md:gap-8 flex-wrap">
          {speakers.people.map((person) => (
            <div key={person.name} className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
              <div className="bg-bone rounded-3xl shadow-lg flex flex-col items-center p-10 h-full w-full">
                <div className="w-full aspect-[4/3] relative mb-8">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover rounded-2xl w-full h-full"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2 text-center">{person.name}</h3>
                <p className="text-moss text-base font-medium mb-3 text-center">{person.role}</p>
                <p className="text-charcoal text-base text-center opacity-80">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <GradientCTAButton href="https://deals.brilliantperspectives.com/order-form1749742211523" />
        </div>
      </Container>
    </section>
  )
}
