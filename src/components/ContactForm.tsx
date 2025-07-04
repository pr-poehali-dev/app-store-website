import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
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
    <section className="bg-white rounded-2xl p-8 mb-12 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-golos font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 font-golos">
            Есть вопросы или предложения? Мы всегда готовы помочь!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <div className="space-y-6">
            <h3 className="text-xl font-golos font-semibold text-gray-900 mb-4">
              Контактная информация
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-golos font-medium text-gray-900">Email</p>
                  <p className="text-gray-600 font-golos">
                    support@appstore.ru
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-golos font-medium text-gray-900">
                    Телефон
                  </p>
                  <p className="text-gray-600 font-golos">+7 (800) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-golos font-medium text-gray-900">Адрес</p>
                  <p className="text-gray-600 font-golos">Москва, Россия</p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className="font-golos h-12 bg-gray-50/80 border-0 focus:bg-white/90 rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="font-golos h-12 bg-gray-50/80 border-0 focus:bg-white/90 rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                required
              />
              <Textarea
                name="message"
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                className="font-golos min-h-[120px] bg-gray-50/80 border-0 focus:bg-white/90 rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-purple-500/20 resize-none"
                required
              />
              <Button
                type="submit"
                className="w-full font-golos h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
