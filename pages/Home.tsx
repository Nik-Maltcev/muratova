import React from 'react';
import { ArrowRight, Briefcase, Users, Scale, Globe, FileText, Landmark, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
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

      {/* TEAM SECTION */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-serif text-4xl text-white leading-tight">
              АДВОКАТЫ<br/>БЮРО
            </h2>
            <div className="h-px bg-stone-700 flex-grow mx-8 hidden md:block mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lawyer 1 */}
            <div className="group bg-[#222] p-6 hover:bg-[#2a2a2a] transition-colors border-t-2 border-transparent hover:border-[#c6964a]">
               <div className="mb-6 overflow-hidden aspect-[3/4] w-full">
                  <img 
                    src="https://placehold.co/600x800/333333/ffffff?text=Фото+1" 
                    alt="МУРАТОВА НАДЕЖДА ДМИТРИЕВНА" 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="text-left">
                  <h3 className="font-serif text-lg font-bold uppercase mb-2 text-[#c6964a]">МУРАТОВА НАДЕЖДА ДМИТРИЕВНА</h3>
                  <p className="text-xs font-bold text-stone-400 mb-4">Адвокат, Управляющий партнер</p>
                  <p className="text-xs text-stone-400 mb-6 leading-relaxed border-t border-stone-700 pt-4">
                    Специализация: Семейные споры, защита прав юридических лиц при проведении проверок государственными (муниципальными) органами, дела об административных правонарушениях.
                  </p>
               </div>
            </div>

             {/* Lawyer 2 */}
            <div className="group bg-[#222] p-6 hover:bg-[#2a2a2a] transition-colors border-t-2 border-transparent hover:border-[#c6964a]">
               <div className="mb-6 overflow-hidden aspect-[3/4] w-full">
                  <img 
                    src="https://placehold.co/600x800/333333/ffffff?text=Фото+2" 
                    alt="ХАСАНШИНА РЕГИНА ГАЙФУЛОВНА" 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="text-left">
                  <h3 className="font-serif text-lg font-bold uppercase mb-2 text-[#c6964a]">ХАСАНШИНА РЕГИНА ГАЙФУЛОВНА</h3>
                  <p className="text-xs font-bold text-stone-400 mb-4">Адвокат, Партнер</p>
                  <p className="text-xs text-stone-400 mb-6 leading-relaxed border-t border-stone-700 pt-4">
                    Специализация: Земельные споры, наследственные споры, защита прав потерпевших.
                  </p>
               </div>
            </div>

             {/* Lawyer 3 */}
            <div className="group bg-[#222] p-6 hover:bg-[#2a2a2a] transition-colors border-t-2 border-transparent hover:border-[#c6964a]">
               <div className="mb-6 overflow-hidden aspect-[3/4] w-full">
                  <img 
                    src="https://placehold.co/600x800/333333/ffffff?text=Фото+3" 
                    alt="ХУСНУЛЛИНА ДИАНА ФАИЛЕВНА" 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="text-left">
                  <h3 className="font-serif text-lg font-bold uppercase mb-2 text-[#c6964a]">ХУСНУЛЛИНА ДИАНА ФАИЛЕВНА</h3>
                  <p className="text-xs font-bold text-stone-400 mb-4">Адвокат, Партнер</p>
                  <p className="text-xs text-stone-400 mb-6 leading-relaxed border-t border-stone-700 pt-4">
                    Специализация: Семейные споры, жилищные споры, споры о защите прав потребителей, споры с кредитными организациями.
                  </p>
               </div>
            </div>

          </div>
          
           <div className="flex justify-between items-center mt-12">
             <Link to="/contacts" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c6964a] hover:text-white transition-colors">
               Вся команда <ArrowRight size={16}/>
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
};