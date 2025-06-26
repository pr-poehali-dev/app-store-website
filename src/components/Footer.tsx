import { Download, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Информация о компании */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-golos font-bold">
                Магазин приложений
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-golos">
              Ваш надежный источник качественных приложений для работы, обучения
              и творчества.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span className="font-golos">support@appstore.ru</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-golos">+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="font-golos">Москва, Россия</span>
              </div>
            </div>
          </div>

          {/* Полезные ссылки */}
          <div>
            <h3 className="text-lg font-golos font-semibold mb-4">
              Полезные ссылки
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  О нас
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Категории
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Популярные
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Новинки
                </a>
              </div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Поддержка
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Условия использования
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 font-golos"
                >
                  Контакты
                </a>
              </div>
            </div>
          </div>

          {/* Удаляем форму обратной связи - она будет в контенте */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-golos font-semibold mb-4">
              Наши социальные сети
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-800 font-golos"
              >
                Telegram
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-800 font-golos"
              >
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600 font-golos">
            © 2024 AppStore. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
