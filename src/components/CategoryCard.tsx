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
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer group">
      <div
        className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon name={iconName} size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-xs text-gray-500">{count} приложений</div>
    </div>
  );
};

export default CategoryCard;
