import Icon from "@/components/ui/icon";

interface CategoryCardProps {
  title: string;
  description: string;
  iconName: string;
  color: string;
  count: number;
}

const CategoryCard = ({
  title,
  description,
  iconName,
  color,
  count,
}: CategoryCardProps) => {
  const gradients = {
    "bg-blue-500": "bg-gradient-to-br from-blue-500 to-cyan-400",
    "bg-purple-500": "bg-gradient-to-br from-purple-500 to-pink-400",
    "bg-green-500": "bg-gradient-to-br from-green-500 to-emerald-400",
    "bg-orange-500": "bg-gradient-to-br from-orange-500 to-yellow-400",
  };

  const gradientClass = gradients[color as keyof typeof gradients] || color;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
      <div
        className={`w-12 h-12 rounded-xl ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
      >
        <Icon name={iconName} size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-xs text-purple-500 font-medium">
        {count} приложений
      </div>
    </div>
  );
};

export default CategoryCard;
