import React from 'react';
import { FileText } from 'lucide-react';

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
  // 2023
  { id: '1', title: 'Адвокат Татарстана №1 (158)', journal: 'Адвокат Татарстана', year: '2023', description: 'Декабрь 2022, январь, февраль', coverUrl: 'https://drive.google.com/thumbnail?id=1tQpE-8XLqGtR7jrTBFK9sfB3Zq57LK0m&sz=w400', pdfLink: 'https://drive.google.com/file/d/1tQpE-8XLqGtR7jrTBFK9sfB3Zq57LK0m/preview' },
  { id: '2', title: 'Адвокат Татарстана №2 (159)', journal: 'Адвокат Татарстана', year: '2023', description: 'Март, апрель, май', coverUrl: 'https://drive.google.com/thumbnail?id=1Q0XjO61ZKjZrFpK4aI63au6UzRfiOrcD&sz=w400', pdfLink: 'https://drive.google.com/file/d/1Q0XjO61ZKjZrFpK4aI63au6UzRfiOrcD/preview' },
  { id: '3', title: 'Адвокат Татарстана №3 (160)', journal: 'Адвокат Татарстана', year: '2023', description: 'Июнь, июль, август', coverUrl: 'https://drive.google.com/thumbnail?id=1KJ3po-_3S3uklBdW4qWZi2OlkYxg72rc&sz=w400', pdfLink: 'https://drive.google.com/file/d/1KJ3po-_3S3uklBdW4qWZi2OlkYxg72rc/preview' },
  { id: '4', title: 'Адвокат Татарстана №4 (161)', journal: 'Адвокат Татарстана', year: '2023', description: 'Сентябрь, октябрь, ноябрь', coverUrl: 'https://drive.google.com/thumbnail?id=17WJ0FK6ITE_0Yd3Kx5FzS721W97clQ5U&sz=w400', pdfLink: 'https://drive.google.com/file/d/17WJ0FK6ITE_0Yd3Kx5FzS721W97clQ5U/preview' },
  // 2022
  { id: '5', title: 'Адвокат Татарстана №3 (156)', journal: 'Адвокат Татарстана', year: '2022', description: 'Июнь, июль, август', coverUrl: 'https://drive.google.com/thumbnail?id=1mZ7-d23-wqy0rUhacHHfij9na_svgsr8&sz=w400', pdfLink: 'https://drive.google.com/file/d/1mZ7-d23-wqy0rUhacHHfij9na_svgsr8/preview' },
  // 2020
  { id: '6', title: 'Адвокат Татарстана №1 (145)', journal: 'Адвокат Татарстана', year: '2020', description: 'Январь', coverUrl: 'https://drive.google.com/thumbnail?id=1HsXiXI1rvLITM0OAP4wJfhU072BNc3Ee&sz=w400', pdfLink: 'https://drive.google.com/file/d/1HsXiXI1rvLITM0OAP4wJfhU072BNc3Ee/preview' },
  { id: '7', title: 'Адвокат Татарстана №2 (146)', journal: 'Адвокат Татарстана', year: '2020', description: 'Февраль', coverUrl: 'https://drive.google.com/thumbnail?id=1To19SL7HIdOt5R_1oeY03FPpIs3Ef8sF&sz=w400', pdfLink: 'https://drive.google.com/file/d/1To19SL7HIdOt5R_1oeY03FPpIs3Ef8sF/preview' },
  { id: '8', title: 'Адвокат Татарстана №3 (147)', journal: 'Адвокат Татарстана', year: '2020', description: 'Март, апрель, май', coverUrl: 'https://drive.google.com/thumbnail?id=1O5UJ6lvcRFNjvg76IUIqlJ81s2zjr-PC&sz=w400', pdfLink: 'https://drive.google.com/file/d/1O5UJ6lvcRFNjvg76IUIqlJ81s2zjr-PC/preview' },
  { id: '9', title: 'Адвокат Татарстана №4 (148)', journal: 'Адвокат Татарстана', year: '2020', description: 'Июнь, июль, август', coverUrl: 'https://drive.google.com/thumbnail?id=12n51DriQkbULEueZGmY6KoyaOXaFTzVq&sz=w400', pdfLink: 'https://drive.google.com/file/d/12n51DriQkbULEueZGmY6KoyaOXaFTzVq/preview' },
  // 2019
  { id: '10', title: 'Адвокат Татарстана №2 (138)', journal: 'Адвокат Татарстана', year: '2019', description: 'Февраль', coverUrl: 'https://drive.google.com/thumbnail?id=1w2LPkEoamnnYkeRYOo20jhV2FPymjcw7&sz=w400', pdfLink: 'https://drive.google.com/file/d/1w2LPkEoamnnYkeRYOo20jhV2FPymjcw7/preview' },
  { id: '11', title: 'Адвокат Татарстана №5 (141)', journal: 'Адвокат Татарстана', year: '2019', description: 'Июль', coverUrl: 'https://drive.google.com/thumbnail?id=1w2LPkEoamnnYkeRYOo20jhV2FPymjcw7&sz=w400', pdfLink: 'https://drive.google.com/file/d/1w2LPkEoamnnYkeRYOo20jhV2FPymjcw7/preview' },
  { id: '12', title: 'Адвокат Татарстана №6 (142)', journal: 'Адвокат Татарстана', year: '2019', description: 'Август', coverUrl: 'https://drive.google.com/thumbnail?id=1gPCeK3E5E9Ra4Na83xK0rJXD7HHTEFlz&sz=w400', pdfLink: 'https://drive.google.com/file/d/1gPCeK3E5E9Ra4Na83xK0rJXD7HHTEFlz/preview' },
  // 2018
  { id: '13', title: 'Адвокат Татарстана №07 (131)', journal: 'Адвокат Татарстана', year: '2018', description: 'Июль', coverUrl: 'https://drive.google.com/thumbnail?id=1twThFC6F_OPyrxw-eLpPBY6k2_FAQX28&sz=w400', pdfLink: 'https://drive.google.com/file/d/1twThFC6F_OPyrxw-eLpPBY6k2_FAQX28/preview' },
  { id: '14', title: 'Адвокат Татарстана №08 (132)', journal: 'Адвокат Татарстана', year: '2018', description: 'Август', coverUrl: 'https://drive.google.com/thumbnail?id=1WeyoLWbYTH40gNI3oRtiSbuTQP_G9BC-&sz=w400', pdfLink: 'https://drive.google.com/file/d/1WeyoLWbYTH40gNI3oRtiSbuTQP_G9BC-/preview' },
  { id: '15', title: 'Адвокат Татарстана №09 (133)', journal: 'Адвокат Татарстана', year: '2018', description: 'Сентябрь', coverUrl: 'https://drive.google.com/thumbnail?id=1bb3GNb8aPApJ9rt-5GpCzxqtt_cIx6Gx&sz=w400', pdfLink: 'https://drive.google.com/file/d/1bb3GNb8aPApJ9rt-5GpCzxqtt_cIx6Gx/preview' },
  { id: '16', title: 'Адвокат Татарстана №10 (134)', journal: 'Адвокат Татарстана', year: '2018', description: 'Октябрь', coverUrl: 'https://drive.google.com/thumbnail?id=1oSNF7vhWu9l1zwFOO6gT4dvMkrFQFYin&sz=w400', pdfLink: 'https://drive.google.com/file/d/1oSNF7vhWu9l1zwFOO6gT4dvMkrFQFYin/preview' },
  { id: '17', title: 'Адвокат Татарстана №11 (135)', journal: 'Адвокат Татарстана', year: '2018', description: 'Ноябрь', coverUrl: 'https://drive.google.com/thumbnail?id=1oSNF7vhWu9l1zwFOO6gT4dvMkrFQFYin&sz=w400', pdfLink: 'https://drive.google.com/file/d/1oSNF7vhWu9l1zwFOO6gT4dvMkrFQFYin/preview' },
  // 2017
  { id: '18', title: 'Адвокат Татарстана №06 (118)', journal: 'Адвокат Татарстана', year: '2017', description: 'Июнь', coverUrl: 'https://drive.google.com/thumbnail?id=1rndJSPNkc1MP7aI2AuA9aJArZr06F5xi&sz=w400', pdfLink: 'https://drive.google.com/file/d/1rndJSPNkc1MP7aI2AuA9aJArZr06F5xi/preview' },
];

export const Publications: React.FC = () => {
  const openPdf = (link: string) => {
    window.open(link.replace('/preview', '/view'), '_blank');
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

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <p className="text-xs text-stone-500 mt-1">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
