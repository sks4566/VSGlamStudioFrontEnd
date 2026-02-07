import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { useSite } from "../lib/SiteContext";
import {
  PageHero,
  Section,
  StatCard,
  ServiceCard,
  GalleryGrid,
  TestimonialList,
  LoadingState,
  ErrorState,
} from "../components/UI";

const Home = () => {
  const siteFromContext = useSite();
  const siteQuery = useData(api.site, []);
  const servicesQuery = useData(api.services, []);
  const galleryQuery = useData(api.gallery, []);
  const reviewsQuery = useData(api.reviews, []);

  const site = siteFromContext || siteQuery.data;

  if (!site && siteQuery.loading) return <LoadingState />;
  if (siteQuery.error && !siteFromContext) return <ErrorState message={siteQuery.error.message} />;

  return (
    <>
      <PageHero
        kicker={site?.brand?.tagline}
        title={site?.hero?.title}
        subtitle={site?.hero?.subtitle}
        image={site?.brand?.heroImage}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/schedule" className="button-primary">
            {site?.hero?.primaryCta || "Book a consultation"}
          </Link>
          <Link to="/services" className="button-secondary">
            {site?.hero?.secondaryCta || "Explore services"}
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        {(site?.stats || []).map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      {site?.brandLogos?.length ? (
        <section className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 pb-12">
          {site.brandLogos.map((logo, index) => (
            <img
              key={`${logo}-${index}`}
              src={logo}
              alt="Brand logo"
              className="h-12 w-auto rounded-full border border-ink/10 bg-white/80 p-2"
            />
          ))}
        </section>
      ) : null}

      <Section
        kicker="About"
        title={site?.about?.title}
        description={site?.about?.description}
      >
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <img
            src={site?.about?.image}
            alt="About"
            className="h-80 w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="space-y-4">
            <ul className="space-y-3 text-sm text-ink/70">
              {(site?.about?.highlights || []).map((item) => (
                <li key={item} className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="button-secondary">
              Meet the artist
            </Link>
          </div>
        </div>
      </Section>

      <Section kicker="Services" title="Signature artistry" description="Choose the experience tailored to your moment.">
        {servicesQuery.loading && <LoadingState />}
        {servicesQuery.error && <ErrorState message={servicesQuery.error.message} />}
        {servicesQuery.data && (
          <div className="grid gap-6 md:grid-cols-3">
            {servicesQuery.data.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        )}
      </Section>

      <Section kicker="Gallery" title="Featured looks" description="A glimpse of recent bridal, fashion, and editorial work.">
        {galleryQuery.loading && <LoadingState />}
        {galleryQuery.error && <ErrorState message={galleryQuery.error.message} />}
        {galleryQuery.data && <GalleryGrid items={galleryQuery.data} />}
      </Section>

      <Section kicker="Testimonials" title="Client love" description="Real experiences from brides, brands, and students.">
        {reviewsQuery.loading && <LoadingState />}
        {reviewsQuery.error && <ErrorState message={reviewsQuery.error.message} />}
        {reviewsQuery.data && <TestimonialList items={reviewsQuery.data} />}
      </Section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="glass-card flex flex-col gap-6 rounded-[2rem] p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">{site?.cta?.title || "Ready"}</p>
            <h3 className="text-3xl font-semibold">{site?.cta?.description}</h3>
          </div>
          <Link to="/schedule" className="button-primary">
            {site?.cta?.button || "Schedule"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
