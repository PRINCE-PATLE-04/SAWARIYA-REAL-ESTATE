interface Props {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-royal-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {breadcrumb && (
          <p className="text-gold-400/80 font-inter text-sm mb-4">{breadcrumb}</p>
        )}
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <div className="section-divider mb-6"></div>
        <p className="text-white/70 font-inter text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
