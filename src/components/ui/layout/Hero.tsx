interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
