import { Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppCardProps {
  name: string;
  developer: string;
  description: string;
  rating: number;
  downloads: string;
  price: string;
  imageUrl: string;
  category: string;
}

const AppCard = ({
  name,
  developer,
  description,
  rating,
  downloads,
  price,
  imageUrl,
  category,
}: AppCardProps) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 group hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 overflow-hidden border-2 border-purple-200">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-montserrat font-semibold text-gray-900 truncate group-hover:text-purple-700 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{developer}</p>
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{rating}</span>
              </div>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">{downloads}</span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                  Бесплатно
                </span>
                <span className="text-xs bg-gradient-to-r from-purple-400 to-pink-400 text-white px-2 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
              >
                <Download className="w-4 h-4 mr-1" />
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
