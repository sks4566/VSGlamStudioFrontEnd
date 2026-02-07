import { useState } from "react";
import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, LoadingState, ErrorState } from "../components/UI";

const Contact = () => {
  const contactQuery = useData(api.contactInfo, []);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await api.submitContact(formState);
      const message =
        typeof response === "string"
          ? response
          : response?.message || JSON.stringify(response);
      setSuccessMessage(message);
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  if (contactQuery.loading) return <LoadingState />;
  if (contactQuery.error) return <ErrorState message={contactQuery.error.message} />;

  const contact = contactQuery.data;

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's design your glow"
        subtitle="Share your event details and we will confirm availability."
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="input-field"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
              <input
                className="input-field"
                name="email"
                type="email"
                placeholder="Email address"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="input-field"
              name="phone"
              placeholder="Phone number"
              value={formState.phone}
              onChange={handleChange}
            />
            <textarea
              className="input-field min-h-[140px]"
              name="message"
              placeholder="Tell us about your event"
              value={formState.message}
              onChange={handleChange}
            />
            <button type="submit" className="button-primary" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send inquiry"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose">Something went wrong. Please try again.</p>
            )}
          </form>
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold">Studio</h3>
              <p className="mt-2 text-sm text-ink/70">{contact.studio}</p>
              <p className="mt-2 text-sm text-ink/70">{contact.hours}</p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold">Reach us</h3>
              <p className="mt-2 text-sm text-ink/70">{contact.phone}</p>
              <p className="mt-2 text-sm text-ink/70">{contact.email}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
