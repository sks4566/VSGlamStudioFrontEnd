import { mockFetch } from "../data/mockData";
const DEFAULT_BASE = "https://vsglamstudiobackend.onrender.com";

export const getBaseUrl = () => {
  const fromEnv = import.meta.env.VITE_API_BASE_URL;
  if (!fromEnv) return DEFAULT_BASE;
  return fromEnv.replace(/\/$/, "");
};

const shouldUseMock = () => import.meta.env.VITE_USE_MOCK === "true";

export const fetchJson = async (path, options = {}) => {
  if (shouldUseMock()) {
    return mockFetch(path, options);
  }

  const url = `${getBaseUrl()}${path}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
};

export const api = {
  site: () => fetchJson("/site"),
  services: () => fetchJson("/services"),
  service: (slug) => fetchJson(`/services/${slug}`),
  gallery: () => fetchJson("/gallery"),
  reviews: () => fetchJson("/reviews"),
  contactInfo: () => fetchJson("/contact"),
  submitContact: (payload) =>
    fetchJson("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  submitAppointment: (payload) =>
    fetchJson("/appointments", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
