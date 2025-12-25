import React from 'react';
import { Calendar } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  photos?: string[];
}

const events: EventItem[] = [
  {
    id: '1',
    title: 'Legal Summer Party 2023',
    date: '2023',
    description: 'Адвокаты бюро приняли участие во второй антиконференции Legal Summer Party 2023.',
    photos: [
      '/summer-party/legal summer1.jpg',
      '/summer-party/legal summer2.jpg',
      '/summer-party/legal summer3.jpg'
    ]
  },
  {
    id: '2',
    title: 'Парусная регата 2022',
    date: '2022',
    description: 'Команда адвокатов бюро участвовала в Парусной регате в г. Санкт-Петербург и заняла два первых места из трех номинаций.',
    photos: [
      '/regata/Парусная регата 1.jpg',
      '/regata/Парусная регата 2.jpg',
      '/regata/Парусна регата 3.jpg'
    ]
  }
];

export const Events: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6964a] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-[#c6964a]"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-stone-400 uppercase">Жизнь бюро</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">МЕРОПРИЯТИЯ</h1>
          <p className="text-stone-400 text-xl max-w-3xl">
            Особое внимание адвокаты бюро уделяют саморазвитию и профилактике профессионального выгорания.
          </p>
        </div>
      </div>

      {/* Events Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {events.map((event, eventIdx) => (
            <article key={event.id}>
              {/* Event Header with Main Photo */}
              {event.photos && event.photos.length > 0 && (
                <div className="relative mb-8 rounded-2xl overflow-hidden group">
                  {/* Main large photo */}
                  <div className="aspect-[21/9] md:aspect-[3/1]">
                    <img 
                      src={event.photos[0]} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar size={18} className="text-[#c6964a]" />
                      <span className="text-sm font-bold text-white/80 uppercase tracking-wider">{event.date}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">
                      {event.title}
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl hidden md:block">
                      {event.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Description for mobile */}
              <p className="text-stone-600 leading-relaxed mb-6 text-lg md:hidden">
                {event.description}
              </p>
              
              {/* All Photos Grid - показываем все фото */}
              {event.photos && event.photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {event.photos.map((photo, idx) => (
                    <div key={idx} className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-100 group">
                      <img 
                        src={photo} 
                        alt={`${event.title} - фото ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Divider */}
              {eventIdx < events.length - 1 && (
                <div className="mt-20 flex items-center gap-4">
                  <div className="h-px bg-stone-200 flex-grow"></div>
                  <div className="w-2 h-2 rounded-full bg-[#c6964a]"></div>
                  <div className="h-px bg-stone-200 flex-grow"></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
