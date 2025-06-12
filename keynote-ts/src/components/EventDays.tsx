import eventContent from '@/content/eventContent.json'
import { GradientCTAButton } from '@/components/GradientCTAButton'

export function EventDays() {
  const days = eventContent.eventDays;

  return (
    <section className="py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-display text-4xl font-bold tracking-tighter text-ochre sm:text-5xl mb-16">
          Event at a Glance
        </h2>
        <div className="flex flex-col gap-y-8">
          {days.map((d) => (
            <div key={d.day} className="bg-bone rounded-3xl shadow-lg p-0 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Left: Day */}
                <div className="flex items-center justify-center bg-celadon/30 sm:bg-transparent p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-charcoal/10">
                  <span className="text-moss font-bold text-2xl sm:text-3xl text-center">{d.day}</span>
                </div>
                {/* Right: Theme & Description */}
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="text-2xl font-semibold text-charcoal mb-3 text-center sm:text-left">{d.theme}</div>
                  <div className="text-charcoal text-base opacity-80 text-center sm:text-left">{d.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 