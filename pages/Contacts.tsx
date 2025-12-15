import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contacts: React.FC = () => {
  const [activeMap, setActiveMap] = useState<'kazan' | 'kazan2'>('kazan');

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6964a] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-[#c6964a]"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-stone-400 uppercase">Связаться с нами</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">КОНТАКТЫ</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {/* Kazan Office 1 */}
              <div 
                className={`flex items-start gap-4 p-6 border cursor-pointer transition-all ${activeMap === 'kazan' ? 'border-[#c6964a] bg-[#c6964a]/5' : 'border-stone-200 hover:border-[#c6964a]'}`}
                onClick={() => setActiveMap('kazan')}
              >
                <div className="p-3 bg-stone-100 text-[#c6964a]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-1">Офис в Казани (основной)</h3>
                  <p className="text-stone-600">ул. Спартаковская, д. 84, корп. 1, пом. 1003<br/>420049, Республика Татарстан</p>
                </div>
              </div>

              {/* Kazan Office 2 */}
              <div 
                className={`flex items-start gap-4 p-6 border cursor-pointer transition-all ${activeMap === 'kazan2' ? 'border-[#c6964a] bg-[#c6964a]/5' : 'border-stone-200 hover:border-[#c6964a]'}`}
                onClick={() => setActiveMap('kazan2')}
              >
                <div className="p-3 bg-stone-100 text-[#c6964a]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-1">Дополнительный офис в Казани</h3>
                  <p className="text-stone-600">ул. Калинина, д. 32<br/>420043, Республика Татарстан</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 border border-stone-200">
                <div className="p-3 bg-stone-100 text-[#c6964a]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-1">Телефон</h3>
                  <a href="tel:+79179105599" className="block text-stone-600 hover:text-[#c6964a] transition-colors text-lg">+7 (917) 910-55-99</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 border border-stone-200">
                <div className="p-3 bg-stone-100 text-[#c6964a]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg mb-1">Email</h3>
                  <a href="mailto:advokatmuratova@gmail.com" className="block text-stone-600 hover:text-[#c6964a] transition-colors">advokatmuratova@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-stone-100 rounded-lg overflow-hidden shadow-lg">
            {activeMap === 'kazan' && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.287870792575!2d49.1477512!3d55.770872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eadaf8d4863d5%3A0x32c672cadfc234e4!2z0KHQv9Cw0YDRgtCw0LrQvtCy0YHQutCw0Y8g0YPQuy4sIDg0INC6Miwg0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9LCDQoNC-0YHRgdC40Y8sIDQyMDA0OQ!5e0!3m2!1sru!2sde!4v1764267530173!5m2!1sru!2sde"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Офис на Спартаковской"
              />
            )}
            {activeMap === 'kazan2' && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.6305875669327!2d49.1450477!3d55.782287499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead0a0c3302b1%3A0x123ed16b1a601a74!2z0YPQuy4g0JrQsNC70LjQvdC40L3QsCwgMzIsINCa0LDQt9Cw0L3RjCwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwg0KDQvtGB0YHQuNGPLCA0MjAwNDM!5e0!3m2!1sru!2sde!4v1764267614038!5m2!1sru!2sde"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Офис на Калинина"
              />
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-stone-50 p-8 md:p-12 rounded-lg border border-stone-200">
          <h3 className="font-serif text-3xl text-stone-900 mb-8 text-center">Обратная связь</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Ваше имя</label>
                <input type="text" className="w-full bg-white border border-stone-300 p-4 focus:outline-none focus:border-[#c6964a] transition-colors" placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Телефон</label>
                <input type="tel" className="w-full bg-white border border-stone-300 p-4 focus:outline-none focus:border-[#c6964a] transition-colors" placeholder="+7 (999) 000-00-00" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Сообщение</label>
              <textarea rows={4} className="w-full bg-white border border-stone-300 p-4 focus:outline-none focus:border-[#c6964a] transition-colors" placeholder="Опишите вашу ситуацию..."></textarea>
            </div>
            <button className="w-full bg-stone-900 text-white font-medium py-4 hover:bg-[#c6964a] transition-colors">
              Отправить заявку
            </button>
            <p className="text-xs text-stone-400 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </div>

        {/* Requisites */}
        <div className="mt-16 pt-12 border-t border-stone-200 text-sm text-stone-500 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-stone-900 mb-4 text-lg">Реквизиты</h4>
            <p className="mb-2">Адвокатское бюро Республики Татарстан «Муратова и партнеры»</p>
            <p>ИНН 1659216155 / КПП 165901001</p>
            <p>ОГРН 1116600045689</p>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 mb-4 text-lg">Банковские реквизиты</h4>
            <p>Р/с: 40703810716837000012</p>
            <p>ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО)</p>
            <p>БИК: 044525411</p>
          </div>
        </div>
      </div>
    </div>
  );
};
