import React from 'react';

interface StandardContentProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function StandardContent({ title, subtitle, children }: StandardContentProps) {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block uppercase">Regulatory & Integrity</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-12 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-[#3E4949] leading-relaxed font-light italic">
            {subtitle}
          </p>
        </header>

        <article className="prose prose-zinc prose-lg max-w-none 
          prose-headings:font-serif prose-headings:text-foreground prose-headings:font-normal
          prose-p:text-[#3E4949] prose-p:font-light prose-p:leading-relaxed
          prose-strong:text-foreground prose-strong:font-bold
          prose-ul:list-none prose-ul:pl-0
          prose-li:border-l-2 prose-li:border-primary/10 prose-li:pl-6 prose-li:mb-6
        ">
          {children}
        </article>
      </div>
    </div>
  );
}
