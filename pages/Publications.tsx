import React, { useState } from 'react';
import { FileText, ExternalLink, X, Grid, List, Layers } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  description: string;
  coverUrl?: string;
  pdfLink: string;
}

const publications: Publication[] = [
  {
    id: '1',
    title: 'Адвокат Татарстана №1 (158)',
    journal: 'Адвокат Татарстана',
    year: '2023',
    description: 'Декабрь 2022, январь, февраль 2023',
    coverUrl: 'https://drive.google.com/thumbnail?id=1tQpE-8XLqGtR7jrTBFK9sfB3Zq57LK0m&sz=w400',
    pdfLink: 'https://drive.google.com/file/d/1tQpE-8XLqGtR7jrTBFK9sfB3Zq57LK0m/preview'
  },
  {
    id: '2',
    title: 'Адвокат Татарстана №2 (159)',
    journal: 'Адвокат Татарстана',
    year: '2023',
    description: 'Март, апрель, май 2023',
    coverUrl: 'https://drive.google.com/thumbnail?id=1Q0XjO61ZKjZrFpK4aI63au6UzRfiOrcD&sz=w400',
    pdfLink: 'https://drive.google.com/file/d/1Q0XjO61ZKjZrFpK4aI63au6UzRfiOrcD/preview'
  },
  {
    id: '3',
    title: 'Адвокат Татарстана №3 (160)',
    journal: 'Адвокат Татарстана',
    year: '2023',
    description: 'Июнь, июль, август 2023',
    coverUrl: 'https://drive.google.com/thumbnail?id=1KJ3po-_3S3uklBdW4qWZi2OlkYxg72rc&sz=w400',
    pdfLink: 'https://drive.google.com/file/d/1KJ3po-_3S3uklBdW4qWZi2OlkYxg72rc/preview'
  },
  {
    id: '4',
    title: 'Адвокат Татарстана №4 (161)',
    journal: 'Адвокат Татарстана',
    year: '2023',
    description: 'Сентябрь, октябрь, ноябрь 2023',
    coverUrl: 'https://drive.google.com/thumbnail?id=17WJ0FK6ITE_0Yd3Kx5FzS721W97clQ5U&sz=w400',
    pdfLink: 'https://drive.google.com/file/d/17WJ0FK6ITE_0Yd3Kx5FzS721W97clQ5U/preview'
  }
];

type ViewMode = 'cards' | 'gallery' | 'modal';

export const Publications: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const openPdf = (link: string) => {
    if (viewMode === 'modal') {
      setSelectedPdf(link);
    } else {
      window.open(link.replace('/preview', '/view'), '_blank');
    }
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6964a] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-[#c6964a]"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-stone-400 uppercase">Научная деятельность</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">ПУБЛИКАЦИИ</h1>
          <p className="text-stone-400 text-xl max-w-3xl">
            Наши адвокаты ведут активную научную деятельность, публикуясь в ведущих юридических изданиях.
          </p>
        </div>
      </div>

      {/* View Mode Switcher */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between border-b border-stone-200 pb-6">
          <p className="text-sm text-stone-500">Выберите вариант отображения:</p>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                viewMode === 'cards' 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Grid size={16} />
              Карточки
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                viewMode === 'gallery' 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Layers size={16} />
              Галерея
            </button>
            <button
              onClick={() => setViewMode('modal')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                viewMode === 'modal' 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <List size={16} />
              Модальное окно
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* ВАРИАНТ 1: Карточки с превью */}
        {viewMode === 'cards' && (
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub) => (
              <div 
                key={pub.id} 
                className="group bg-white border border-stone-200 hover:border-[#c6964a] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative h-72 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText size={48} className="text-stone-300" />
                  </div>
                  {pub.coverUrl && (
                    <img 
                      src={pub.coverUrl} 
                      alt={pub.title}
                      className="absolute inset-0 w-full h-full object-contain bg-white"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-[#c6964a] text-white text-xs font-bold px-3 py-1">
                    {pub.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-[#c6964a] uppercase tracking-wider mb-2">
                    {pub.journal}
                  </p>
                  <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-[#c6964a] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-2">
                    {pub.description}
                  </p>
                  <button 
                    onClick={() => openPdf(pub.pdfLink)}
                    className="flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-[#c6964a] transition-colors"
                  >
                    Читать публикацию
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ВАРИАНТ 2: Галерея */}
        {viewMode === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {publications.map((pub) => (
              <div 
                key={pub.id}
                onClick={() => openPdf(pub.pdfLink)}
                className="group cursor-pointer"
              >
                {/* Cover */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-stone-800 to-stone-900 mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText size={32} className="text-stone-600" />
                  </div>
                  {pub.coverUrl && (
                    <img 
                      src={pub.coverUrl} 
                      alt={pub.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#c6964a]/0 group-hover:bg-[#c6964a]/80 transition-colors flex items-center justify-center">
                    <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Открыть
                    </span>
                  </div>
                  {/* Year badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1">
                    {pub.year}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-sm text-stone-900 group-hover:text-[#c6964a] transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">{pub.journal}</p>
              </div>
            ))}
          </div>
        )}

        {/* ВАРИАНТ 3: Список с модальным окном */}
        {viewMode === 'modal' && (
          <div className="space-y-4">
            {publications.map((pub) => (
              <div 
                key={pub.id}
                className="flex items-center gap-6 p-6 border border-stone-200 hover:border-[#c6964a] transition-colors group"
              >
                {/* Icon */}
                <div className="shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center group-hover:bg-[#c6964a] transition-colors">
                  <FileText size={24} className="text-stone-400 group-hover:text-white transition-colors" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-[#c6964a] uppercase tracking-wider mb-1">
                        {pub.journal} • {pub.year}
                      </p>
                      <h3 className="font-serif text-lg text-stone-900 group-hover:text-[#c6964a] transition-colors">
                        {pub.title}
                      </h3>
                    </div>
                    <button 
                      onClick={() => openPdf(pub.pdfLink)}
                      className="shrink-0 px-4 py-2 bg-stone-900 text-white text-sm font-medium hover:bg-[#c6964a] transition-colors"
                    >
                      Читать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for PDF Preview */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPdf(null)}
        >
          <div 
            className="relative bg-white w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-[#c6964a] transition-colors"
            >
              <X size={20} />
            </button>
            
            {/* PDF iframe */}
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="PDF Preview"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </div>
  );
};
