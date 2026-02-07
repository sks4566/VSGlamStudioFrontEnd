const Footer = ({ site }) => {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold">{site?.brand?.name || "VS Glam Studio"}</h3>
          <p className="mt-3 text-sm text-white/70">
            {site?.brand?.location || "Bhopal • Indore • Destination Weddings"}
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/60">Studio</h4>
          <p className="mt-3 text-sm text-white/80">
            {site?.contact?.studio || "Studio 24, Arera Colony, Mopal"}
          </p>
          <p className="mt-2 text-sm text-white/80">
            {site?.contact?.phone || "+91 99999 12345"}
          </p>
          <p className="mt-2 text-sm text-white/80">
            {site?.contact?.email || "hello@vsglamstudio.com"}
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/60">Social</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {(site?.socials || []).map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="text-white/80 transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site?.brand?.name || "VS Glam Studio"}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
