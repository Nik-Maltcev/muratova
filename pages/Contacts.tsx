import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contacts: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
        {/* Map Header */}
      <div className="h-[400px] w-full bg-stone-200 relative">
          <div className="absolute inset-0 bg-stone-900/10 flex items-center justify-center">
             <p className="text-stone-500 font-serif text-2xl">[Карта Яндекс/Google Maps]</p>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.6268846377755!2d49.1235!3d55.7788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ2JzQzLjciTiA0OcKwMDcnMjQuNiJF!5e0!3m2!1sen!2sru!4v1635789000000!5m2!1sen!2sru" 
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'grayscale(100%) contrast(1.2)'}} 
            allowFullScreen={false} 
            loading="lazy"
            className="absolute inset-0"
          ></iframe>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-20">
        <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-gold-500">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="font-serif text-4xl text-primary-900 mb-8">Контакты</h1>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-100 text-gold-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg mb-1">Офис в Казани</h3>
                    <p className="text-stone-600">ул. Спартаковская, д. 84, корп. 1, пом. 1003<br/>420049, Республика Татарстан</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-100 text-gold-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg mb-1">Офис в Москве</h3>
                    <p className="text-stone-600">Воронцово поле, д. 12, стр. 3, оф.104<br/>Москва</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-100 text-gold-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg mb-1">Телефоны</h3>
                    <a href="tel:+79179105599" className="block text-stone-600 hover:text-gold-600 transition-colors">+7 (917) 910-55-99</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-100 text-gold-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg mb-1">Email</h3>
                    <a href="mailto:advokatmuratova@gmail.com" className="block text-stone-600 hover:text-gold-600 transition-colors">advokatmuratova@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
              <h3 className="font-serif text-2xl text-primary-900 mb-6">Обратная связь</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Ваше имя</label>
                  <input type="text" className="w-full bg-white border border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Телефон</label>
                  <input type="tel" className="w-full bg-white border border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="+7 (999) 000-00-00" />
                </div>
                 <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full bg-white border border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Опишите вашу ситуацию..."></textarea>
                </div>
                <button className="w-full bg-primary-900 text-white font-medium py-4 hover:bg-gold-600 transition-colors mt-4">
                  Отправить заявку
                </button>
                <p className="text-xs text-stone-400 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-stone-200 text-sm text-stone-500 grid md:grid-cols-2 gap-8">
            <div>
               <h4 className="font-bold text-stone-900 mb-2">Реквизиты</h4>
               <p>Адвокатское бюро Республики Татарстан «Муратова и партнеры»</p>
               <p>ИНН 1659216155 / КПП 165901001</p>
               <p>ОГРН 1116600045689</p>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-2">Банковские реквизиты</h4>
              <p>Р/с: 40703810716837000012</p>
              <p>ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО)</p>
              <p>БИК: 044525411</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};