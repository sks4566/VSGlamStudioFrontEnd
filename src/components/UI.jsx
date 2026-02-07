import { Link } from "react-router-dom";

export const PageHero = ({ title, subtitle, image, kicker, children }) => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-6">
          {kicker && <p className="section-kicker">{kicker}</p>}
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          {subtitle && <p className="text-base text-ink/70 md:text-lg">{subtitle}</p>}
          {children}
        </div>
        {image && (
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blush/50 blur-2xl" />
            <img
              src={image}
              alt="Hero"
              className="relative h-[320px] w-full rounded-[2rem] object-cover shadow-soft md:h-[420px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export const Section = ({ kicker, title, description, children }) => (
  <section className="mx-auto max-w-6xl px-6 py-14">
    <div className="flex flex-col gap-6">
      <div>
        {kicker && <p className="section-kicker">{kicker}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="mt-4 text-base text-ink/70">{description}</p>}
      </div>
      {children}
    </div>
  </section>
);

export const StatCard = ({ label, value }) => (
  <div className="glass-card rounded-3xl px-6 py-5 text-center">
    <p className="text-3xl font-semibold text-ink">{value}</p>
    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/50">{label}</p>
  </div>
);

export const ServiceCard = ({ service }) => (
  <div className="glass-card flex h-full flex-col overflow-hidden rounded-3xl">
    <img src={service.heroImage} alt={service.title} className="h-48 w-full object-cover" />
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div>
        <h3 className="text-2xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm text-ink/70">{service.short}</p>
      </div>
      <Link to={`/services/${service.slug}`} className="button-secondary w-fit">
        View details
      </Link>
    </div>
  </div>
);



export const GalleryGrid = ({ items }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {items.map((item) => (
      <div key={item.id} className="group relative overflow-hidden rounded-3xl">
        <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition group-hover:opacity-100">
          <p className="text-sm uppercase tracking-[0.3em]">{item.category}</p>
          <h3 className="text-2xl font-semibold">{item.title}</h3>
        </div>
      </div>
    ))}
  </div>
);

export const TestimonialList = ({ items }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {items.map((item, index) => (
      <div key={index} className="glass-card rounded-3xl p-6">
        <p className="text-sm text-ink/70">“{item.quote}”</p>
        <p className="mt-4 text-sm font-semibold">{item.name}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-rose">{item.role}</p>
      </div>
    ))}
  </div>
);

export const BlogCard = ({ post }) => (
  <div className="glass-card flex h-full flex-col overflow-hidden rounded-3xl">
    <img src={post.cover} alt={post.title} className="h-44 w-full object-cover" />
    <div className="flex flex-1 flex-col gap-3 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-rose">{post.date}</p>
      <h3 className="text-2xl font-semibold">{post.title}</h3>
      <p className="text-sm text-ink/70">{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="button-secondary w-fit">
        Read more
      </Link>
    </div>
  </div>
);

export const LoadingState = () => (
  <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-16">
    <div className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm">Loading...</div>
  </div>
);

export const ErrorState = ({ message }) => (
  <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-16">
    <div className="rounded-3xl border border-rose/20 bg-rose/10 px-6 py-5 text-sm text-rose">
      {message || "Something went wrong."}
    </div>
  </div>
);
