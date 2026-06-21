import {
  Camera,
  Wind,
  Zap,
  LayoutGrid,
  Paintbrush,
  Layers,
  Hammer,
  Grid3x3,
  ChefHat,
  Droplets,
  Shield,
  Settings,
  Headphones,
  Clock,
  BadgeDollarSign,
  Timer,
  Award,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  wind: Wind,
  camera: Camera,
  zap: Zap,
  layout: LayoutGrid,
  paintbrush: Paintbrush,
  layers: Layers,
  hammer: Hammer,
  grid: Grid3x3,
  "chef-hat": ChefHat,
  droplets: Droplets,
  shield: Shield,
  settings: Settings,
  headphones: Headphones,
  clock: Clock,
  "badge-dollar": BadgeDollarSign,
  timer: Timer,
  award: Award,
};

export function ServiceIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Wind;
  return <Icon className={className} />;
}
