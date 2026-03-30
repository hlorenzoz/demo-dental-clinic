interface HeroProps {
  title: string;
  subtitle?: string;
  category?: string;
}

export function Hero({ title, subtitle, category }: HeroProps) {
  return (
    <section className="py-24 lg:py-40 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {category && (
        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary-container mb-8 block">
          {category}
        </span>
      )}
      <h1 className="text-5xl lg:text-7xl font-serif text-foreground mb-10 leading-[1.05] max-w-5xl tracking-tight text-balance">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg lg:text-xl text-[#3E4949] max-w-2xl leading-relaxed text-balance font-light">
          {subtitle}
        </p>
      )}
    </section>
  );
}
