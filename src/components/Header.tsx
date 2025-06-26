import { Search, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <header className="bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-golos font-bold text-gray-800">
                Магазин приложений
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors" />
              <Input
                type="search"
                placeholder="Поиск приложений..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg focus:shadow-xl focus:bg-white/90 rounded-xl font-golos transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="font-golos text-gray-700 hover:bg-gray-100 border border-gray-300"
            >
              Мои приложения
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-md">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
