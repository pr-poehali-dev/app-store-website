import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import AppCard from "@/components/AppCard";
import PromoBanner from "@/components/PromoBanner";

const Index = () => {
  const categories = [
    {
      title: "Офисные приложения",
      description: "Текстовые редакторы, таблицы, презентации",
      iconName: "FileText",
      color: "bg-blue-500",
      count: 24,
    },
    {
      title: "Разработка",
      description: "IDE, компиляторы, инструменты программирования",
      iconName: "Code",
      color: "bg-purple-500",
      count: 18,
    },
    {
      title: "Образование",
      description: "Обучающие программы и курсы",
      iconName: "GraduationCap",
      color: "bg-green-500",
      count: 15,
    },
    {
      title: "Графика и дизайн",
      description: "Фоторедакторы, 3D-моделирование, дизайн",
      iconName: "Palette",
      color: "bg-orange-500",
      count: 12,
    },
  ];

  const apps = [
    {
      name: "Microsoft Office 365",
      developer: "Microsoft Corporation",
      description:
        "Полный пакет офисных приложений включая Word, Excel, PowerPoint и Outlook",
      rating: 4.5,
      downloads: "100M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=64&h=64&fit=crop",
      category: "Офис",
    },
    {
      name: "Adobe Photoshop",
      developer: "Adobe Systems",
      description:
        "Профессиональный редактор изображений для дизайнеров и фотографов",
      rating: 4.7,
      downloads: "50M+",
      price: "₽1,299",
      imageUrl:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=64&h=64&fit=crop",
      category: "Дизайн",
    },
    {
      name: "Pascal ABC.NET",
      developer: "Южный федеральный университет",
      description:
        "Современная среда разработки для изучения программирования на Pascal",
      rating: 4.3,
      downloads: "5M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=64&h=64&fit=crop",
      category: "Разработка",
    },
    {
      name: "Duolingo",
      developer: "Duolingo Inc.",
      description: "Изучение иностранных языков в игровой форме",
      rating: 4.6,
      downloads: "10M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=64&h=64&fit=crop",
      category: "Образование",
    },
    {
      name: "Visual Studio Code",
      developer: "Microsoft Corporation",
      description:
        "Легкий и мощный редактор кода с поддержкой множества языков",
      rating: 4.8,
      downloads: "25M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop",
      category: "Разработка",
    },
    {
      name: "Khan Academy",
      developer: "Khan Academy",
      description:
        "Бесплатные образовательные курсы по математике, физике и другим предметам",
      rating: 4.4,
      downloads: "8M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=64&h=64&fit=crop",
      category: "Образование",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-roboto">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Промо-баннеры */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <PromoBanner
            title="Office 365"
            subtitle="Новая версия"
            description="Все инструменты для работы в одном пакете"
            buttonText="Скачать бесплатно"
            imageUrl="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&h=200&fit=crop"
            gradient="bg-gradient-to-r from-blue-600 to-blue-800"
          />
          <PromoBanner
            title="Photoshop 2024"
            subtitle="Для творчества"
            description="Создавайте невероятные проекты с ИИ"
            buttonText="Попробовать"
            imageUrl="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=200&fit=crop"
            gradient="bg-gradient-to-r from-purple-600 to-purple-800"
          />
        </div>

        {/* Категории */}
        <section className="mb-12">
          <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
            Категории приложений
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>

        {/* Популярные приложения */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900">
              Популярные приложения
            </h2>
            <button className="text-primary hover:text-primary/80 font-medium">
              Показать все
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
