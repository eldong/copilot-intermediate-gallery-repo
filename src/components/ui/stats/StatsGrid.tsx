import { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: number | string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="card-stats">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {stat.value}
              </p>
            </div>
            <div className={`icon-container-${stat.color}`}>
              <stat.icon className={`h-6 w-6 icon-${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
