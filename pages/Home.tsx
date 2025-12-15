import React, { useState } from 'react';
import { ArrowRight, Briefcase, Users, Scale, Globe, FileText, Landmark, GraduationCap, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Lawyer {
  id: string;
  name: string;
  position: string;
  specialization: string;
  photo: string;
  fullBio: string;
}

const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'МУРАТОВА НАДЕЖДА ДМИТРИЕВНА',
    position: 'Адвокат, Управляющий партнер',
    specialization: 'Семейные споры, защита прав юридических лиц при проведении проверок государственными (муниципальными) органами, дела об административных правонарушениях.',
    photo: '/team/muratova.jpg',
    fullBio: `Кандидат юридических наук
Медиатор
Докторант ФГАО УВО «Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ) на соискание профессиональной степени Доктора юридического администрирования /Doctor of Legal Administration/

В 2005 г. закончила с отличием юридический факультет Казанского государственного университета им. В.И. Ульянова-Ленина, награждена медалью: 100 лучших выпускников.

В 2007 г. завершила обучение на факультете журналистики, социологии и психологии Казанского государственного университета им. В.И. Ульянова-Ленина и получила второе высшее образование по специальности журналистика.

В 2008 г. завершила обучение в аспирантуре по очной форме обучения в Московской государственной юридической академии им. О. Е. Кутафина (МГЮА, г. Москва) по специальности 12.00.09 (уголовный процесс, криминалистика и судебная экспертиза; оперативно-розыскная деятельность).

В 2009 г. защитила диссертацию на соискание ученой степени кандидата юридических наук в Академии экономической безопасности МВД РФ.

Тема кандидатской диссертации «Процессуальные акты адвоката в уголовном судопроизводстве».

Является автором научных публикаций и монографий.

Специализация адвоката — защита прав юридических лиц в судах по экономическим, административным спорам, защита при проведении проверок государственными и муниципальными органами, международные гражданские и семейные споры.

Стаж работы по юридической специальности с 2002 года (более 20 лет).`
  },
  {
    id: '2',
    name: 'ХАСАНШИНА РЕГИНА ГАЙФУЛОВНА',
    position: 'Адвокат, Партнер',
    specialization: 'Земельные споры, наследственные споры, защита прав потерпевших.',
    photo: '/team/hasanshina.jpg',
    fullBio: 'Специализация: Земельные споры, наследственные споры, защита прав потерпевших.'
  },
  {
    id: '3',
    name: 'ХУСНУЛЛИНА ДИАНА ФАИЛЕВНА',
    position: 'Адвокат, Партнер',
    specialization: 'Семейные споры, жилищные споры, споры о защите прав потребителей, споры с кредитными организациями.',
    photo: '/team/husnullina.jpg',
    fullBio: 'Специализация: Семейные споры, жилищные споры, споры о защите прав потребителей, споры с кредитными организациями.'
  },
  {
    id: '4',
    name: 'ЖЕЛЕЗОВА ВЛАДА ВЛАДИМИРОВНА',
    position: 'Адвокат, Партнер',
    specialization: 'Арбитражные споры, возникающие из договоров аренды, подряда, поставки, лизинга, страховые споры, трудовые споры.',
    photo: '/team/zhelezova.jpg',
    fullBio: 'Специализация: Арбитражные споры, возникающие из договоров аренды, подряда, поставки, лизинга, страховые споры, трудовые споры.'
  },
  {
    id: '5',
    name: 'СВЕРИГИНА РЭНАТА РАШИТОВНА',
    position: 'Адвокат, Партнер',
    specialization: 'Налоговые споры.',
    photo: '/team/sverigina.jpg',
    fullBio: 'Специализация: Налоговые споры.'
  },
  {
    id: '6',
    name: 'ГАТАУЛЛИН АЙРАТ МАРАТОВИЧ',
    position: 'Адвокат, Партнер',
    specialization: 'Банкротство юридических и физических лиц.',
    photo: '/team/gataullin.jpg',
    fullBio: 'Специализация: Банкротство юридических и физических лиц.'
  }
];

export const Home: React.FC = () => {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  return (
    <div className="animate-fade-in font-sans text-stone-900">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-40 bg-white overflow-hidden">
        {/* Background Decorative Element - Removed to ensure white background photo blends perfectly */}
        {/* <div className="absolute top-0 right-0 w-2/3 h-full bg-[#fcf9f2] -skew-x-12 translate-x-1/3 z-0"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-0.5 w-12 bg-[#c6964a]"></div>
                 <span className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase">Юридическая поддержка</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] mb-8">
                ЗАЩИТА <span className="text-[#c6964a]">СЕМЬИ</span>,<br />
                СОБСТВЕННОСТИ,<br />
                <span className="italic font-light">БИЗНЕСА</span>
              </h1>
              <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
                Адвокатское бюро «Муратова и партнеры» — это команда профессионалов, обеспечивающая надежную правовую защиту ваших интересов в России и за рубежом.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="inline-flex justify-center items-center px-8 py-4 bg-[#1a1a1a] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#c6964a] transition-colors">
                  Связаться с нами
                </Link>
                <Link to="/practices" className="inline-flex justify-center items-center px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-bold uppercase tracking-widest hover:bg-stone-50 transition-colors">
                  Наши практики
                </Link>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end relative">
               <div className="relative w-full max-w-md lg:max-w-full flex justify-center">
                 {/* Decorative Frame - Adjusted to be subtle behind the subject */}
                 <div className="absolute top-10 right-10 w-full h-full border-[10px] border-[#fcf9f2] -z-10 hidden md:block rounded-full opacity-50"></div>
                 
                 <img 
                  src="/muratova-hero.png" 
                  alt="Муратова Надежда Дмитриевна" 
                  className="relative z-10 w-full max-w-[400px] lg:max-w-[500px] object-contain h-auto"
                  style={{ 
                    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.05))" 
                  }}
                />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Beige Background) */}
      <section className="py-24 bg-[#ead8b5] bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-serif text-4xl text-stone-900 leading-tight">
              ОБ АДВОКАТСКОМ<br/>БЮРО
            </h2>
            <div className="h-px bg-stone-300 flex-grow mx-8 hidden md:block mb-4"></div>
            <p className="text-stone-500 font-serif italic text-xl">Since 2021</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Item 1 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <Briefcase size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Адвокатское бюро было основано в 2021 году двумя адвокатами: Муратовой Надеждой Дмитриевной и Муратовой Надеждой Георгиевной. В последствии, в число партнеров бюро вошли еще пять адвокатов. В настоящее время в бюро работают семь адвокатов-партнеров.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <div className="text-[9px] font-bold uppercase tracking-wider">Off</div>
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Основной офис бюро находится в городе Казани и расположен в центральной части города. В декабре 2022 года было принято решение об открытии филиала бюро в городе Москве.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <Users size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Каждый из адвокатов бюро имеет свою специализацию, в том числе в сфере международного частного права, что позволяет предоставлять правовую поддержку как физическим, так и юридическим лицам.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <Landmark size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Занимаясь защитой детей в международном масштабе, адвокаты нашего бюро специализируются на оказании правовой помощи в рамках Гаагской конвенции о гражданско-правовых аспектах международного похищения детей. Они также входят в состав адвокатов при центральном органе, который отвечает за применение данной конвенции.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <GraduationCap size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Адвокаты бюро являются спикерами и участвуют в различных конференциях, международных программах обучения. Они проходили многочисленные стажировки в Германии, Франции, США, Венгрии, Чехии, Армении и Катаре.<br/>
                  Обмениваясь опытом с юристами со всего мира, адвокаты бюро предоставляют своим клиентам профессиональную юридическую помощь в соответствии с высокими стандартами европейского права и оказывают своевременную юридическую помощь как российским гражданам за рубежом, так и иностранным гражданам на территории России.
                </p>
              </div>
            </div>

             {/* Item 6 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <Scale size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Адвокаты бюро участвуют в социально значимых проектах pro bono: проект Федеральной палаты адвокатов России «Адвокатура в школе»; проект Федерального союза адвокатов России «Женское право».
                </p>
                <div className="mt-2 space-y-1">
                  <a href="#" className="block text-xs text-[#d2ab66] hover:underline break-all">https://fparf.ru/for-citizens/education/education-advocacy-school/</a>
                  <a href="#" className="block text-xs text-[#d2ab66] hover:underline break-all">http://адвокатурашколе.рф/</a>
                  <a href="#" className="block text-xs text-[#d2ab66] hover:underline break-all">https://fparf.ru/for-citizens/education/the-project-of-the-federal-union-of-lawyers-of-russia-women-s-right/</a>
                </div>
              </div>
            </div>

            {/* Item 7 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <Globe size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Особое внимание адвокаты бюро уделяют саморазвитию и профилактике профессионального выгорания. Так, в 2022 г. команда адвокатов бюро участвовала в Парусной регате в г. Санкт-Петербург и заняла два первых места из трех номинаций, а в 2023 году адвокаты бюро приняли участие во второй антиконференции Legal Summer Party 2023.
                </p>
                <div className="mt-2 text-xs text-[#d2ab66]">
                    <p className="mb-1">Legal Summer Party 2023:</p>
                    <a href="#" className="block mb-2 hover:underline">https://disk.yandex.ru/d/wXOSN_dgFOgUAw</a>
                    <p className="mb-1">Парусная регата 2022:</p>
                    <a href="#" className="block hover:underline">https://disk.yandex.ru/d/Ib6952Drq0vTuw</a>
                </div>
              </div>
            </div>

            {/* Item 8 */}
            <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 pt-1">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#c6964a]">
                    <FileText size={20} strokeWidth={1.5} />
                 </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-stone-700">
                  Наши адвокаты имеют благодарности от руководства и клиентов Федеральной палаты адвокатов Российской Федерации и Адвокатской палаты Республики Татарстан за эффективную защиту прав в судах и иных государственных органах.
                </p>
                <a href="#" className="block mt-2 text-xs text-[#d2ab66] hover:underline">
                  Посмотреть благодарности - https://disk.yandex.ru/d/kxvZSYB-NOwZYQ
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRACTICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-serif text-4xl text-stone-900 leading-tight">
              ПРАКТИКИ<br/>БЮРО
            </h2>
            <div className="h-px bg-stone-200 flex-grow mx-8 hidden md:block mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Представление интересов в судах общей юрисдикции по семейным, наследственным, земельным, жилищным, трудовым спорам, спорам, связанных с социальным обеспечением, выплатой пенсий, защитой прав потребителей, спорам о взыскании ущерба, спорам по различным видам страхования и иным видам споров;
                    </p>
                </div>
                <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Оспаривание решений, действий (бездействия) государственных и муниципальных органов власти, в том числе налоговых органов и антимонопольной службы;
                    </p>
                </div>
                 <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Оказание юридической помощи в корпоративных конфликтах;
                    </p>
                </div>
                 <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Представление интересов медицинских организаций, защита прав врачей в судебных разбирательствах по гражданским делам, в надзорных органах, при привлечении к дисциплинарной, административной и уголовной ответственности;
                    </p>
                </div>
                 <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Оказание юридической помощи по вопросам цифровых активов;
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Представление интересов при проведении проверок государственными и муниципальными органами, в том числе юридическое сопровождение в ходе мероприятий налогового контроля, налоговых проверок, проверок антимонопольной службы;
                    </p>
                </div>
                <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Представление интересов в арбитражных судах по различным категориям дел, возникающих из гражданских правоотношений (строительный подряд, поставка, в том числе с иностранным элементом, дела по государственным и муниципальным контрактам, аренда, земельные споры и т. п.), а также в процедурах банкротства юридических и физических лиц, защита от субсидиарной ответственности;
                    </p>
                </div>
                 <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Оказание юридической помощи в международно-правовых спорах, в том числе по делам в рамках Гаагской конвенции 1980 года о гражданско-правовых аспектах международного похищения детей;
                    </p>
                </div>
                 <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Оказание помощи по делам об административных правонарушениях;
                    </p>
                </div>
                 <div className="flex gap-4 items-start p-4 hover:bg-stone-50 transition-colors rounded-lg">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#c6964a] mt-2.5 shrink-0"></div>
                    <p className="text-sm text-stone-700 leading-relaxed">
                        Участие адвокатов в ведении переговоров, консультации по вопросам наследственного планирования, заключения брачного договора
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION - Carousel */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-serif text-4xl text-white leading-tight">
              АДВОКАТЫ<br/>БЮРО
            </h2>
            <div className="h-px bg-stone-700 flex-grow mx-8 hidden md:block mb-4"></div>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {lawyers.map((lawyer) => (
              <div key={lawyer.id} className="group bg-[#222] p-6 hover:bg-[#2a2a2a] transition-colors border-t-2 border-transparent hover:border-[#c6964a] flex-shrink-0 w-[300px] snap-start">
                <div className="mb-6 overflow-hidden aspect-[3/4] w-full bg-stone-800">
                  <img 
                    src={lawyer.photo} 
                    alt={lawyer.name} 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/333333/c6964a?text=${lawyer.name.split(' ')[1]?.[0] || ''}${lawyer.name.split(' ')[2]?.[0] || ''}`; }}
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-serif text-base font-bold uppercase mb-2 text-[#c6964a]">{lawyer.name}</h3>
                  <p className="text-xs font-bold text-stone-400 mb-4">{lawyer.position}</p>
                  <p className="text-xs text-stone-400 leading-relaxed border-t border-stone-700 pt-4 line-clamp-3">
                    Специализация: {lawyer.specialization}
                  </p>
                  <button 
                    onClick={() => setSelectedLawyer(lawyer)}
                    className="mt-4 text-xs font-bold text-[#c6964a] hover:text-white transition-colors uppercase tracking-wider"
                  >
                    Подробнее →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll hint */}
          <div className="flex justify-center mt-4 gap-2">
            <span className="text-stone-500 text-xs">← Листайте →</span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mt-8">
            <Link to="/contacts" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c6964a] hover:text-white transition-colors">
              Контакты <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* Lawyer Modal */}
      {selectedLawyer && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLawyer(null)}
        >
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedLawyer(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-[#c6964a] transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="grid md:grid-cols-3 gap-0">
              {/* Photo */}
              <div className="md:col-span-1 bg-stone-100">
                <img 
                  src={selectedLawyer.photo} 
                  alt={selectedLawyer.name}
                  className="w-full h-full object-cover min-h-[300px]"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/e5e5e5/c6964a?text=${selectedLawyer.name.split(' ')[1]?.[0] || ''}${selectedLawyer.name.split(' ')[2]?.[0] || ''}`; }}
                />
              </div>
              
              {/* Content */}
              <div className="md:col-span-2 p-8">
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-2">{selectedLawyer.name}</h2>
                <p className="text-[#c6964a] font-bold text-sm uppercase tracking-wider mb-6">{selectedLawyer.position}</p>
                
                <div className="prose prose-sm max-w-none">
                  {selectedLawyer.fullBio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-stone-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};