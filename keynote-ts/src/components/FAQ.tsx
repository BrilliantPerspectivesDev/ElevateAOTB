'use client'

import { useState } from 'react'
import eventContent from '@/content/eventContent.json'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faq = eventContent.faq;

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">{faq.heading}</h2>
          <dl className="mt-16 divide-y divide-charcoal/10">
            {faq.items.map((faq, idx) => (
              <div key={faq.question} className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-charcoal focus:outline-none"
                    aria-controls={`faq-${idx}`}
                    aria-expanded={openIndex === idx}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className="text-base font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {/* Plus icon (collapsed) */}
                      <svg
                        className={openIndex === idx ? 'hidden size-6' : 'size-6'}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                      {/* Minus icon (expanded) */}
                      <svg
                        className={openIndex === idx ? 'size-6' : 'hidden size-6'}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  id={`faq-${idx}`}
                >
                  <p className="text-base text-celadon">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ 