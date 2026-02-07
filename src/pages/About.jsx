import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, LoadingState, ErrorState } from "../components/UI";

const About = () => {
  const siteQuery = useData(api.site, []);

  if (siteQuery.loading) return <LoadingState />;
  if (siteQuery.error) return <ErrorState message={siteQuery.error.message} />;

  const site = siteQuery.data;

  return (
    <>
      <PageHero
        kicker="About"
        title="Artistry rooted in skin-first techniques"
        subtitle="Every look is crafted to feel timeless, breathable, and unmistakably you."
        image={site?.about?.image}
      />

      <Section
        kicker="Story"
        title="A calm presence on your biggest day"
        description="Our process blends detail-oriented prep with a soothing, luxury experience so you feel taken care of from first consult to final touch-up."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-6 text-sm text-ink/70">
            <h3 className="text-2xl font-semibold text-ink">Signature approach</h3>
            <p className="mt-3">
              We design personalized mood boards, track skin prep timelines, and curate makeup that lasts through ceremonies, rituals, and celebrations.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-sm text-ink/70">
            <h3 className="text-2xl font-semibold text-ink">On-location team</h3>
            <p className="mt-3">
              Our calm, precise team manages setup, touch-ups, and styling across events so you can enjoy the moment.
            </p>
          </div>
        </div>
      </Section>

      <Section kicker="Values" title="What we stand for">
        <div className="grid gap-6 md:grid-cols-3">
          {["Hygiene-first kit", "Customized timelines", "Editorial-grade finish"].map((item) => (
            <div key={item} className="glass-card rounded-3xl p-6">
              <h4 className="text-xl font-semibold">{item}</h4>
              <p className="mt-3 text-sm text-ink/70">
                We bring premium, sanitized products and an efficient flow so your schedule stays smooth.
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
