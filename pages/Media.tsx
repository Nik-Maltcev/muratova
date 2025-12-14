import React from 'react';
import { ExternalLink, Mic } from 'lucide-react';
import { MediaItem } from '../types';

const mediaItems: MediaItem[] = [
  {
    id: '1',
    source: 'РБК',
    title: 'Как защитить активы компании в условиях санкций',
    date: '20.11.2023',
    link: '#',
    snippet: 'Управляющий партнер Надежда Муратова дала развернутый комментарий о новых рисках для бизнеса и методах реструктуризации активов.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/RBC_logo.svg/1200px-RBC_logo.svg.png'
  },
  {
    id: '2',
    source: 'Коммерсантъ',
    title: 'Рейтинг лучших юристов Татарстана 2023',
    date: '15.10.2023',
    link: '#',
    snippet: 'Бюро «Муратова и партнеры» вошло в ТОП-5 юридических фирм региона в категории «Разрешение споров».',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Kommersant_logo.png'
  },
  {
    id: '3',
    source: 'Право.ru',
    title: 'Судебная практика по делам о банкротстве: тренды года',
    date: '01.09.2023',
    link: '#',
    snippet: 'Экспертное мнение партнеров бюро о ужесточении субсидиарной ответственности директоров.',
    logoUrl: 'https://pravo.ru/assets/images/logo_pravo_ru.png'
  },
  {
    id: '4',
    source: 'БИЗНЕС Online',
    title: 'Адвокаты о громких бракоразводных процессах Казани',
    date: '10.08.2023',
    link: '#',
    snippet: 'Интервью с Дианой Хусруллиной о медиации и мировых соглашениях в семейных спорах high-net-worth individuals.',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Business_Online_Logo.svg/2560px-Business_Online_Logo.svg.png'
  }
];

export const Media: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
       <div className="relative py-24 bg-stone-900 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-5xl text-white mb-6">СМИ о нас</h1>
          <p className="text-stone-400 text-xl max-w-3xl">
            Мы открыты для прессы и регулярно делимся экспертным мнением по актуальным правовым вопросам. 
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
          {mediaItems.map((item, index) => (
            <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gold-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Mic size={16} className="text-white" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 md:p-8 rounded shadow-sm border border-stone-100 hover:shadow-xl hover:border-gold-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-xs uppercase tracking-widest text-gold-600">{item.source}</span>
                  <time className="font-serif text-stone-400 italic text-sm">{item.date}</time>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {item.snippet}
                </p>
                <a href={item.link} className="inline-flex items-center gap-2 text-sm font-bold text-primary-900 border-b border-primary-900 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors">
                  Читать источник <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Press Kit Section */}
        <div className="mt-32 bg-stone-50 p-12 rounded-lg border border-stone-200 text-center">
            <h3 className="font-serif text-3xl text-primary-900 mb-4">Пресс-служба</h3>
            <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
              По вопросам организации интервью, комментариев и участия адвокатов бюро в мероприятиях, пожалуйста, свяжитесь с нами.
            </p>
            <a href="mailto:pr@muratova-partners.ru" className="inline-block px-8 py-3 bg-primary-900 text-white font-medium hover:bg-gold-600 transition-colors">
              Связаться с пресс-службой
            </a>
        </div>
      </div>
    </div>
  );
};