import React from 'react';
import { FileText, Download, BookOpen } from 'lucide-react';
import { Publication } from '../types';

const publications: Publication[] = [
  {
    id: '1',
    title: 'Особенности применения Гаагской конвенции 1980 года в российской судебной практике',
    journal: 'Вестник международного права',
    year: '2023',
    description: 'Анализ ключевых кейсов и процессуальных особенностей возвращения детей при незаконном перемещении.',
    link: '#'
  },
  {
    id: '2',
    title: 'Субсидиарная ответственность контролирующих лиц при банкротстве',
    journal: 'Корпоративный Юрист',
    year: '2023',
    description: 'Обзор изменений в законодательстве и судебной практике за последние 5 лет. Риски для бенефициаров.',
    link: '#'
  },
  {
    id: '3',
    title: 'Медиация как альтернативный способ разрешения семейных споров',
    journal: 'Сборник конференций Федеральной палаты адвокатов',
    year: '2022',
    description: 'Эффективность медиативных соглашений в сравнении с судебными решениями при разделе имущества.',
    link: '#'
  },
  {
    id: '4',
    title: 'Защита прав интеллектуальной собственности в цифровой среде',
    journal: 'Интеллектуальная собственность: Авторское право и смежные права',
    year: '2022',
    description: 'Проблематика фиксации нарушений в сети Интернет и механизмы блокировки контента.',
    link: '#'
  }
];

export const Publications: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl mb-4">Научные Публикации</h1>
          <p className="text-stone-300 max-w-2xl text-lg">
            Наши адвокаты ведут активную научную деятельность, публикуясь в ведущих юридических изданиях и участвуя в разработке правовых доктрин.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {publications.map((pub) => (
            <div key={pub.id} className="flex flex-col md:flex-row gap-6 p-8 border border-stone-200 bg-stone-50 hover:border-gold-400 transition-all rounded-sm shadow-sm hover:shadow-md">
              <div className="shrink-0 flex items-start justify-center md:justify-start">
                <div className="w-16 h-16 bg-white flex items-center justify-center border border-stone-200 text-gold-600 shadow-sm">
                   <BookOpen size={32} />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h2 className="font-serif text-2xl text-primary-900 leading-tight mb-2 md:mb-0">{pub.title}</h2>
                  <span className="inline-block px-3 py-1 bg-primary-900 text-gold-400 text-xs font-bold rounded-full">
                    {pub.year}
                  </span>
                </div>
                <p className="text-sm font-bold text-stone-500 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                  {pub.journal}
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {pub.description}
                </p>
                {pub.link && (
                  <button className="flex items-center gap-2 text-sm font-bold text-primary-900 hover:text-gold-600 transition-colors border-b border-primary-900 hover:border-gold-600 pb-0.5 w-max">
                    <Download size={16} />
                    Читать публикацию
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};