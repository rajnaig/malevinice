export function Timeline() {
    const timelineEvents = [
      {
        year: "1920",
        title: "The Foundation",
        description: "Our great-grandfather established the first family vineyard in Kisgéres (Malý Horeš)."
      },
      {
        year: "1950",
        title: "Second Generation", 
        description: "Expanding the vineyards and focusing on traditional winemaking methods."
      },
      {
        year: "1980",
        title: "Italian Riesling Focus",
        description: "The third generation specialized in Italian Riesling production."
      },
      {
        year: "2020",
        title: "Modern Era",
        description: "Fourth generation continues the legacy while embracing modern winemaking techniques."
      }
    ]
 
    return (
      <section className="py-24 bg-[#fffdf0]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
                A Century of Winemaking
              </h2>
            </div>
 
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[rgb(var(--color-sage))]/30" />
 
              {/* Timeline Events */}
              <div className="space-y-24">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={event.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgb(var(--color-sage))] rounded-full z-10">
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-[rgb(var(--color-sage))]/20 rounded-full animate-ping" />
                    </div>
 
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <div className="bg-[#f3f3e4] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="inline-flex items-center space-x-2 mb-4">
                          <span className="text-3xl font-serif text-[rgb(var(--color-sage))]">
                            {event.year}
                          </span>
                          <div className="h-px flex-grow bg-[rgb(var(--color-sage))]/20" />
                        </div>
                        <h3 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                          {event.title}
                        </h3>
                        <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
 }