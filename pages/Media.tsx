import React from 'react';
import { ExternalLink, Play, Calendar } from 'lucide-react';

interface MediaItem {
  id: string;
  source: string;
  title: string;
  date: string;
  link: string;
  videoLink?: string;
  description: string;
  imageUrl?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    source: 'ТНВ',
    title: 'Татарстан без коррупции - выпуск 11.11.2024г.',
    date: '11.11.2024',
    link: 'https://tnv.ru/tv-projects-item/tatarstan-bez-korrupcii/',
    description: `11 ноября 2024 года на региональном телеканале «Татарстан — новый век», в рамках государственной программы «Реализация антикоррупционной политики Республики Татарстан» состоялся прямой эфир очередного выпуска программы «Татарстан без коррупции».

Участниками программы стали главный советник антикоррупционного мониторинга Управления Главы Республики Татарстан по вопросам антикоррупционной политики Халилуллов Тимур Рустемович, начальник отдела и обобщения судебной практики Арбитражного суда Республики Татарстан Васильева Р.Р., заместитель директора ГБУ МФЦ Нигматуллин Руслан Рашитович, партнер адвокатского бюро Республики Татарстан "Муратова и партнеры" Гатауллин Айрат Маратович.

На повестке обсуждали вопросы, посвященные проблемам банкротства несостоятельности граждан и юридических лиц, минимизации коррупционных рисков при осуществлении процедур банкротства.`,
    imageUrl: '/media/tnv-2024.jpg'
  }
];

export const Media: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6964a] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-[#c6964a]"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-stone-400 uppercase">Пресса</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">СМИ О НАС</h1>
          <p className="text-stone-400 text-xl max-w-3xl">
            Мы открыты для прессы и регулярно делимся экспертным мнением по актуальным правовым вопросам.
          </p>
        </div>
      </div>

      {/* Media Items */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {mediaItems.map((item) => (
            <article key={item.id} className="group">
              {/* Source & Date Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-bold text-lg text-[#c6964a] uppercase tracking-wide">{item.source}</span>
                <div className="h-px bg-stone-200 flex-grow"></div>
                <div className="flex items-center gap-2 text-stone-400">
                  <Calendar size={16} />
                  <time className="text-sm">{item.date}</time>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 group-hover:text-[#c6964a] transition-colors">
                {item.title}
              </h2>

              {/* Image Placeholder */}
              <div className="relative mb-8 bg-stone-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#c6964a] flex items-center justify-center cursor-pointer hover:bg-[#d4a85a] transition-colors">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white text-sm">Смотреть выпуск программы</p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                {item.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Link */}
              <div className="mt-8 pt-8 border-t border-stone-100">
                <p className="text-sm text-stone-500 mb-2">Подробнее:</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c6964a] hover:text-[#a87d3a] transition-colors break-all"
                >
                  {item.link}
                  <ExternalLink size={16} className="shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Press Kit Section */}
        <div className="mt-32 bg-stone-50 p-12 rounded-lg border border-stone-200 text-center">
          <h3 className="font-serif text-3xl text-stone-900 mb-4">Пресс-служба</h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            По вопросам организации интервью, комментариев и участия адвокатов бюро в мероприятиях, пожалуйста, свяжитесь с нами.
          </p>
          <a 
            href="mailto:muratova-partners@mail.ru" 
            className="inline-block px-8 py-3 bg-stone-900 text-white font-medium hover:bg-[#c6964a] transition-colors"
          >
            Связаться с пресс-службой
          </a>
        </div>
      </div>
    </div>
  );
};
