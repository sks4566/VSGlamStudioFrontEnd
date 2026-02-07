import { useParams, Link } from "react-router-dom";
import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, LoadingState, ErrorState } from "../components/UI";

const ServiceDetail = () => {
  const { slug } = useParams();
  const serviceQuery = useData(() => api.service(slug), [slug]);

  if (serviceQuery.loading) return <LoadingState />;
  if (serviceQuery.error) return <ErrorState message={serviceQuery.error.message} />;
  if (!serviceQuery.data) return <ErrorState message="Service not found." />;

  const service = serviceQuery.data;

  return (
    <>
      <PageHero
        kicker="Service"
        title={service.title}
        subtitle={service.short}
        image={service.heroImage}
      />
      <Section kicker="Packages" title="Curated options">
        <div className="grid gap-6 md:grid-cols-3">
          {service.packages.map((pack) => (
            <div key={pack.name} className="glass-card rounded-3xl p-6">
              <h3 className="text-2xl font-semibold">{pack.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-rose">{pack.price}</p>
              <p className="mt-3 text-sm text-ink/70">{pack.details}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/schedule" className="button-primary">
            Book this service
          </Link>
          <Link to="/services" className="button-secondary">
            Back to services
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ServiceDetail;
