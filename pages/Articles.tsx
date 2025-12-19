import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ArticleItem {
  title: string;
  link: string;
}

interface ArticleSection {
  source: string;
  articles: ArticleItem[];
}

const articleSections: ArticleSection[] = [
  {
    source: 'АДВОКАТСКАЯ ГАЗЕТА',
    articles: [
      {
        title: 'Реализация адвокатами полномочия привлекать на договорной основе специалистов при оказании юридической помощи по гражданскому делу',
        link: 'https://www.advgazeta.ru/mneniya/realizatsiya-advokatami-polnomochiya-privlekat-na-dogovornoy-osnove-spetsialistov-pri-okazanii-yuridicheskoy-pomoshchi-po-grazhdanskomu-delu/'
      },
      {
        title: 'Защита семейных прав участников СВО',
        link: 'https://www.advgazeta.ru/mneniya/zashchita-semeynykh-prav-uchastnika-svo/'
      },
      {
        title: 'Рассмотрение семейных споров, осложненных иностранным элементом',
        link: 'https://www.advgazeta.ru/mneniya/rassmotrenie-semeynykh-sporov-oslozhnennykh-inostrannym-elementom/'
      },
      {
        title: 'Когда преступные деньги нельзя конфисковать или обратить в доход государства',
        link: 'https://www.advgazeta.ru/mneniya/kogda-prestupnye-dengi-nelzya-konfiskovat-ili-obratit-v-dokhod-gosudarstva/'
      },
      {
        title: 'Изменяем распространенный состав — ч. 1 ст. 35 КоАП РФ',
        link: 'https://www.advgazeta.ru/mneniya/izbilem-rasprostranenny-sostav-ch-1-st-35-koap-rf/'
      },
      {
        title: 'Инструмент с прицелом в будущее',
        link: 'https://www.advgazeta.ru/mneniya/instrument-s-pritselom-v-budushchee/'
      }
    ]
  },
  {
    source: 'ЖУРНАЛ «THE LAWYER»',
    articles: [
      {
        title: 'О грани красоты и красоте в праве. Проект о 100 женщинах-юристках, чей образ во многом определяет лицо современного юридического сообщества.',
        link: 'https://www.lawyer-magazine.ru/lady/nadezhda-muratova'
      },
      {
        title: 'Скажи мне, кто твоя собака...',
        link: 'https://www.lawyer-magazine.ru/life/skazhi-mne-kto-tvoya-sobaka'
      }
    ]
  }
];

export const Articles: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6964a] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-[#c6964a]"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-stone-400 uppercase">Публикации</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">СТАТЬИ</h1>
          <p className="text-stone-400 text-xl max-w-3xl">
            Экспертные статьи и публикации адвокатов бюро в ведущих юридических изданиях.
          </p>
        </div>
      </div>

      {/* Articles Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {articleSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-20">
            {/* Section Header */}
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 whitespace-nowrap">
                {section.source}
              </h2>
              <div className="h-px bg-stone-200 flex-grow"></div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {section.articles.map((article, articleIdx) => (
                <article 
                  key={articleIdx} 
                  className="group border-l-2 border-stone-200 pl-6 hover:border-[#c6964a] transition-colors"
                >
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-3">Заголовок</p>
                  <h3 className="font-serif text-lg text-stone-800 mb-4 leading-relaxed group-hover:text-[#c6964a] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Ссылка</p>
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#c6964a] hover:text-[#a87d3a] transition-colors break-all"
                  >
                    <span className="line-clamp-1">{article.link}</span>
                    <ExternalLink size={14} className="shrink-0" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
