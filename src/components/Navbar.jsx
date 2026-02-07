import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ brand }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col">
          <span
            className="text-3xl md:text-4xl leading-none text-rose-600 transition-transform hover:scale-105 hover:text-rose-700"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {brand?.name || "VS Glam Studio"}
          </span>
          {/* <span className="text-xs uppercase tracking-[0.3em] text-rose">
            {brand?.tagline || "Makeup Artist"}
          </span> */}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-rose ${isActive ? "text-rose" : "text-ink"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `transition hover:text-rose ${isActive ? "text-rose" : "text-ink"}`
            }
          >
            Book now
          </NavLink>
          <div className="flex flex-col items-end gap-1 rounded-lg bg-gradient-to-r from-rose/5 to-blush/5 px-4 py-2">
            <span className="text-xs uppercase tracking-[0.3em] text-rose font-semibold">Need Makeup?</span>
            <a href={`tel:${brand?.phone || "8707650187"}`} className="flex items-center gap-2 text-lg font-extrabold text-ink hover:text-rose transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {brand?.phone || "8707650187"}
            </a>
          </div>
        </nav>
        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition hover:text-rose ${isActive ? "text-rose" : "text-ink"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
