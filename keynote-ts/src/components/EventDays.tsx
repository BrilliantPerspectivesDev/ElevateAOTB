import eventContent from '@/content/eventContent.json'

export function EventDays() {
  const days = eventContent.eventDays;

  return (
    <section className="py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-display text-4xl font-bold tracking-tighter text-ochre sm:text-5xl mb-16">
          Event at a Glance
        </h2>
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-3">
          {days.map((d) => (
            <div key={d.day} className="bg-bone rounded-3xl shadow-lg flex flex-col items-center p-10 h-full">
              <div className="text-moss font-bold text-lg mb-3">{d.day}</div>
              <div className="text-2xl font-semibold text-charcoal mb-4 text-center">{d.theme}</div>
              <div className="text-charcoal text-base text-center opacity-80">{d.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 