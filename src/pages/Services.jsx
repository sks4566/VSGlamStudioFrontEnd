import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, ServiceCard, LoadingState, ErrorState } from "../components/UI";

const Services = () => {
  const servicesQuery = useData(api.services, []);

  if (servicesQuery.loading) return <LoadingState />;
  if (servicesQuery.error) return <ErrorState message={servicesQuery.error.message} />;

  return (
    <>
      <PageHero
        kicker="Services"
        title="Looks that feel effortless"
        subtitle="Choose from bridal, pre-wedding, editorial, or celebratory makeup packages."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {servicesQuery.data.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
