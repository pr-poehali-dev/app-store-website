import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь будет обработка отправки формы
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Информация о компании */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-golos font-bold">
                AppStore
              </span>
            </div>
            <p className="text-gray-300 mb-6 font-golos">
              Ваш надежный источник качественных приложений для работы, обучения
              и творчества.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="font-golos">support@appstore.ru</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-golos">+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center text-gray-300">
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
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  О нас
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Категории
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Популярные
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Новинки
                </a>
              </div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Поддержка
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Условия использования
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white font-golos"
                >
                  Контакты
                </a>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <h3 className="text-lg font-golos font-semibold mb-4">
              Обратная связь
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-golos"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-golos"
                required
              />
              <Textarea
                name="message"
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-golos min-h-[100px]"
                required
              />
              <Button type="submit" className="w-full font-golos">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-golos">
            © 2024 AppStore. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
