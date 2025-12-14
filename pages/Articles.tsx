import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: '1',
    title: 'Раздел бизнеса при разводе: как сохранить компанию',
    excerpt: 'Рассматриваем стратегии защиты корпоративных прав и минимизации рисков для бизнеса во время бракоразводного процесса.',
    date: '12 Окт 2023',
    category: 'Бизнес и Семья',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Налоговая амнистия 2024: чего ожидать бизнесу',
    excerpt: 'Анализ новых инициатив правительства по дроблению бизнеса и добровольному декларированию активов.',
    date: '05 Сен 2023',
    category: 'Налоги',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Права отцов при определении места жительства ребенка',
    excerpt: 'Ломаем стереотипы судебной практики: успешные кейсы оставления детей с отцами при равных материальных условиях.',
    date: '28 Авг 2023',
    category: 'Семейное право',
    imageUrl: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Банкротство физических лиц: мифы и реальность',
    excerpt: 'Последствия процедуры банкротства для топ-менеджеров и владельцев бизнеса. Ограничения и возможности.',
    date: '15 Июл 2023',
    category: 'Банкротство',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Цифровые финансовые активы: правовое регулирование',
    excerpt: 'Как легально работать с криптовалютой и ЦФА в России в текущем году. Правовые риски.',
    date: '01 Июн 2023',
    category: 'Цифровое право',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Оспаривание кадастровой стоимости недвижимости',
    excerpt: 'Практическое руководство по снижению налоговой нагрузки на коммерческую недвижимость через суд.',
    date: '20 Мая 2023',
    category: 'Недвижимость',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const Articles: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen animate-fade-in">
       {/* Header */}
       <div className="bg-white border-b border-stone-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4 block">Блог экспертов</span>
          <h1 className="font-serif text-5xl text-primary-900 mb-6">Аналитика и Мнения</h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Актуальные правовые обзоры, разбор сложных кейсов и экспертные комментарии наших адвокатов.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group bg-white rounded-none border border-stone-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-900 z-10">
                  {article.category}
                </div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/10 transition-colors"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-stone-400 text-xs font-medium mb-4">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <h3 className="font-serif text-2xl text-primary-900 mb-4 leading-snug group-hover:text-gold-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-primary-900 uppercase tracking-wider group-hover:gap-4 transition-all">
                  Читать статью <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="flex justify-center mt-16 gap-2">
          <button className="w-10 h-10 border border-gold-600 bg-gold-600 text-white flex items-center justify-center">1</button>
          <button className="w-10 h-10 border border-stone-300 hover:border-gold-600 hover:text-gold-600 flex items-center justify-center transition-colors">2</button>
          <button className="w-10 h-10 border border-stone-300 hover:border-gold-600 hover:text-gold-600 flex items-center justify-center transition-colors">3</button>
        </div>
      </div>
    </div>
  );
};