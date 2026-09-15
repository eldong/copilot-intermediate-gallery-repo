import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export function FeatureCard({ icon: Icon, title, description, iconColor }: FeatureCardProps) {
  return (
    <div className="card-feature">
      <Icon className={`h-12 w-12 mx-auto mb-4 ${
        iconColor.includes('blue') ? 'icon-blue' :
        iconColor.includes('green') ? 'icon-green' :
        iconColor.includes('purple') ? 'icon-purple' :
        iconColor.includes('orange') ? 'icon-orange' :
        iconColor.includes('red') ? 'icon-red' :
        iconColor
      }`} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
