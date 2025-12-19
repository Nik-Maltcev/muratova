import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  linkText?: string;
}

const events: EventItem[] = [
  {
    id: '1',
    title: 'Legal Summer Party 2023',
    date: '2023',
    description: 'Адвокаты бюро приняли участие во второй антиконференции Legal Summer Party 2023.',
    link: 'https://disk.yandex.ru/d/wXOSN_dgFOgUAw',
    linkText: 'Фотоотчёт'
  },
  {
    id: '2',
    title: 'Парусная регата 2022',
    date: '2022',
    description: 'Команда адвокатов бюро участвовала в Парусной регате в г. Санкт-Петербург и заняла два первых места из трех номинаций.',
    link: 'https://disk.yandex.ru/d/Ib6952Drq0vTuw',
    linkText: 'Фотоотчёт'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {events.map((event) => (
            <article key={event.id} className="group border-l-4 border-stone-200 hover:border-[#c6964a] transition-colors pl-8 py-4">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={18} className="text-[#c6964a]" />
                <span className="text-sm font-bold text-stone-500 uppercase tracking-wider">{event.date}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4 group-hover:text-[#c6964a] transition-colors">
                {event.title}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6 max-w-3xl">
                {event.description}
              </p>
              {event.link && (
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-900 font-medium hover:bg-[#c6964a] hover:text-white transition-colors"
                >
                  {event.linkText || 'Подробнее'}
                  <ExternalLink size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
