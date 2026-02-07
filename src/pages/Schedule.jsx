import { useState } from "react";
import { api } from "../lib/api";
import { PageHero, Section } from "../components/UI";

const Schedule = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Bridal",
    eventDate: "",
    city: "",
    notes: "",
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
      const response = await api.submitAppointment(formState);
      setSuccessMessage(response);
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        eventType: "Bridal",
        eventDate: "",
        city: "",
        notes: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        kicker="Schedule"
        title="Book your date"
        subtitle="Share your event details and we'll confirm availability within 24 hours."
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
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="input-field"
                name="phone"
                placeholder="Phone"
                value={formState.phone}
                onChange={handleChange}
              />
              <select
                className="input-field"
                name="eventType"
                value={formState.eventType}
                onChange={handleChange}
              >
                <option>Bridal</option>
                <option>Pre-Wedding</option>
                <option>Party</option>
                <option>Fashion</option>
                <option>Creative Shoot</option>
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="input-field"
                name="eventDate"
                type="date"
                value={formState.eventDate}
                onChange={handleChange}
                required
              />
              <input
                className="input-field"
                name="city"
                placeholder="City"
                value={formState.city}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="input-field min-h-[140px]"
              name="notes"
              placeholder="Tell us about your event"
              value={formState.notes}
              onChange={handleChange}
            />
            <button type="submit" className="button-primary" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Request booking"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="space-y-6">
            {[
              {
                title: "Step 1",
                text: "Share event details and preferred looks.",
              },
              {
                title: "Step 2",
                text: "We confirm availability and share the plan.",
              },
              {
                title: "Step 3",
                text: "Lock your date and receive a prep guide.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-rose">{item.title}</p>
                <p className="mt-2 text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Schedule;
