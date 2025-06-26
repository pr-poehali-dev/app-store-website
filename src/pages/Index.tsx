import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import AppCard from "@/components/AppCard";
import ContactForm from "@/components/ContactForm";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Офисные приложения",
  );
  const [showAllInCategory, setShowAllInCategory] = useState(false);

  const categories = [
    {
      title: "Офисные приложения",
      description: "Текстовые редакторы, таблицы, презентации",
      iconName: "FileText",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      count: 3,
    },
    {
      title: "Разработка",
      description: "IDE, компиляторы, инструменты программирования",
      iconName: "Code",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      count: 3,
    },
    {
      title: "Образование",
      description: "Обучающие программы и курсы",
      iconName: "GraduationCap",
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      count: 3,
    },
    {
      title: "Графика и дизайн",
      description: "Фоторедакторы, 3D-моделирование, дизайн",
      iconName: "Palette",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      count: 3,
    },
    {
      title: "Для учебы",
      description: "Электронные учебники, конспекты, планировщики",
      iconName: "BookOpen",
      color: "bg-gradient-to-r from-indigo-500 to-blue-500",
      count: 3,
    },
    {
      title: "Информатика и программирование",
      description: "Среды разработки, компиляторы, отладчики",
      iconName: "Terminal",
      color: "bg-gradient-to-r from-gray-600 to-gray-800",
      count: 3,
    },
    {
      title: "Корпоративные приложения",
      description: "CRM, ERP, системы документооборота",
      iconName: "Building",
      color: "bg-gradient-to-r from-teal-500 to-cyan-500",
      count: 3,
    },
  ];

  const apps = [
    // Офисные приложения
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
      category: "Офисные приложения",
    },
    {
      name: "LibreOffice",
      developer: "The Document Foundation",
      description:
        "Бесплатный офисный пакет с текстовым редактором, таблицами и презентациями",
      rating: 4.3,
      downloads: "50M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=64&h=64&fit=crop",
      category: "Офисные приложения",
    },
    {
      name: "Google Workspace",
      developer: "Google LLC",
      description:
        "Облачные офисные приложения: Docs, Sheets, Slides с совместной работой",
      rating: 4.6,
      downloads: "200M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
      category: "Офисные приложения",
    },

    // Разработка
    {
      name: "Visual Studio Code",
      developer: "Microsoft Corporation",
      description:
        "Мощный редактор кода с поддержкой множества языков программирования",
      rating: 4.8,
      downloads: "80M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop",
      category: "Разработка",
    },
    {
      name: "IntelliJ IDEA",
      developer: "JetBrains",
      description: "Интегрированная среда разработки для Java и других языков",
      rating: 4.7,
      downloads: "15M+",
      price: "Платно",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop",
      category: "Разработка",
    },
    {
      name: "Git",
      developer: "Linus Torvalds",
      description:
        "Распределенная система контроля версий для отслеживания изменений в коде",
      rating: 4.9,
      downloads: "30M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=64&h=64&fit=crop",
      category: "Разработка",
    },

    // Образование
    {
      name: "Khan Academy",
      developer: "Khan Academy",
      description:
        "Бесплатная онлайн-платформа для изучения математики, естественных наук",
      rating: 4.4,
      downloads: "25M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=64&h=64&fit=crop",
      category: "Образование",
    },
    {
      name: "Coursera",
      developer: "Coursera Inc",
      description:
        "Платформа онлайн-курсов от ведущих университетов и компаний мира",
      rating: 4.2,
      downloads: "40M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=64&h=64&fit=crop",
      category: "Образование",
    },
    {
      name: "Duolingo",
      developer: "Duolingo",
      description:
        "Изучение иностранных языков в игровой форме с ежедневными уроками",
      rating: 4.6,
      downloads: "100M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=64&h=64&fit=crop",
      category: "Образование",
    },

    // Графика и дизайн
    {
      name: "Adobe Photoshop",
      developer: "Adobe Systems",
      description:
        "Профессиональный редактор изображений для дизайнеров и фотографов",
      rating: 4.7,
      downloads: "50M+",
      price: "Платно",
      imageUrl:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=64&h=64&fit=crop",
      category: "Графика и дизайн",
    },
    {
      name: "Figma",
      developer: "Figma Inc",
      description:
        "Инструмент для UI/UX дизайна и прототипирования с совместной работой",
      rating: 4.8,
      downloads: "20M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=64&h=64&fit=crop",
      category: "Графика и дизайн",
    },
    {
      name: "Canva",
      developer: "Canva Pty Ltd",
      description:
        "Простой онлайн-редактор для создания графики, презентаций и постов",
      rating: 4.5,
      downloads: "80M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=64&h=64&fit=crop",
      category: "Графика и дизайн",
    },

    // Для учебы
    {
      name: "Notion",
      developer: "Notion Labs",
      description:
        "Универсальное рабочее пространство для заметок, планирования и организации",
      rating: 4.6,
      downloads: "30M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=64&h=64&fit=crop",
      category: "Для учебы",
    },
    {
      name: "Anki",
      developer: "Anki",
      description:
        "Программа для запоминания с использованием интервальных повторений",
      rating: 4.3,
      downloads: "10M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
      category: "Для учебы",
    },
    {
      name: "Obsidian",
      developer: "Dynalist Inc",
      description:
        "Инструмент для создания связанных заметок и управления знаниями",
      rating: 4.7,
      downloads: "8M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=64&h=64&fit=crop",
      category: "Для учебы",
    },

    // Информатика и программирование
    {
      name: "Pascal ABC.NET",
      developer: "Южный федеральный университет",
      description:
        "Современная среда разработки для изучения программирования на Pascal",
      rating: 4.3,
      downloads: "5M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop",
      category: "Информатика и программирование",
    },
    {
      name: "Scratch",
      developer: "MIT Media Lab",
      description: "Визуальный язык программирования для детей и начинающих",
      rating: 4.5,
      downloads: "15M+",
      price: "Бесплатно",
      imageUrl:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=64&h=64&fit=crop",
      category: "Информатика и программирование",
    },
    {
      name: "PyCharm",
      developer: "JetBrains",
      description:
        "Интегрированная среда разработки для Python с мощными инструментами",
      rating: 4.6,
      downloads: "12M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=64&h=64&fit=crop",
      category: "Информатика и программирование",
    },

    // Корпоративные приложения
    {
      name: "Slack",
      developer: "Slack Technologies",
      description: "Корпоративный мессенджер для командной работы и общения",
      rating: 4.4,
      downloads: "60M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
      category: "Корпоративные приложения",
    },
    {
      name: "Zoom",
      developer: "Zoom Video Communications",
      description: "Платформа для видеоконференций и онлайн-встреч",
      rating: 4.2,
      downloads: "150M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=64&h=64&fit=crop",
      category: "Корпоративные приложения",
    },
    {
      name: "Trello",
      developer: "Atlassian",
      description:
        "Инструмент для управления проектами с использованием досок Kanban",
      rating: 4.5,
      downloads: "25M+",
      price: "Freemium",
      imageUrl:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
      category: "Корпоративные приложения",
    },
  ];

  const filteredApps = useMemo(() => {
    let filtered = apps;

    if (selectedCategory) {
      filtered = filtered.filter((app) => app.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Если выбрана категория и не включен режим "показать все", показываем только 8 приложений
    if (selectedCategory && !showAllInCategory && !searchQuery) {
      return filtered.slice(0, 8);
    }

    return filtered;
  }, [searchQuery, selectedCategory, showAllInCategory]);

  const handleCategoryClick = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    setSearchQuery("");
    setShowAllInCategory(false);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setShowAllInCategory(false);
  };

  const handleShowAll = () => {
    setShowAllInCategory(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-golos">
      <Header onSearch={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Промо-баннеры */}
        {!searchQuery && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <PromoBanner
              title="Office 365"
              subtitle="Новая версия"
              description="Все инструменты для работы в одном пакете"
              buttonText="Скачать бесплатно"
              imageUrl="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&h=200&fit=crop"
              gradient="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            />
            <PromoBanner
              title="Photoshop 2024"
              subtitle="Для творчества"
              description="Создавайте невероятные проекты с ИИ"
              buttonText="Попробовать"
              imageUrl="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=200&fit=crop"
              gradient="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
            />
          </div>
        )}

        {/* Категории */}
        {!searchQuery && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-golos font-bold text-gray-900">
                Категории приложений
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category.title)}
                  className="h-full cursor-pointer"
                >
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Популярные приложения */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-golos font-bold text-gray-900">
              {selectedCategory
                ? `${selectedCategory} (${filteredApps.length})`
                : searchQuery
                  ? `Результаты поиска (${filteredApps.length})`
                  : "Популярные приложения"}
            </h2>
            {!searchQuery && !selectedCategory && (
              <button className="flex items-center text-purple-500 hover:text-purple-600 font-golos font-medium transition-colors group">
                <span>Показать все</span>
                <svg
                  className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
            {selectedCategory && !searchQuery && !showAllInCategory && (
              <button
                onClick={handleShowAll}
                className="flex items-center text-purple-500 hover:text-purple-600 font-golos font-medium transition-colors group"
              >
                <span>Показать все</span>
                <svg
                  className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
            {(selectedCategory || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-gray-500 hover:text-gray-700 font-golos font-medium transition-colors"
              >
                Очистить фильтры
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredApps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
          {filteredApps.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-golos">
                По запросу "{searchQuery}" ничего не найдено
              </p>
            </div>
          )}
        </section>

        {/* Форма обратной связи */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
