import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  gradient: string;
}

const PromoBanner = ({
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
  gradient,
}: PromoBannerProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${gradient} text-white p-8 shadow-2xl hover:scale-[1.02] transition-transform`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      <div className="relative z-10 max-w-lg">
        <div className="text-sm font-medium opacity-90 mb-2 bg-white/20 px-3 py-1 rounded-full inline-block">
          {subtitle}
        </div>
        <h2 className="text-3xl font-montserrat font-bold mb-4 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-lg opacity-90 mb-6">{description}</p>
        <Button
          variant="secondary"
          className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
