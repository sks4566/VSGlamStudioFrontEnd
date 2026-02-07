import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
    <h1 className="text-5xl font-semibold">Page not found</h1>
    <p className="text-base text-ink/70">The page you are looking for does not exist.</p>
    <Link to="/" className="button-primary">
      Back to home
    </Link>
  </div>
);

export default NotFound;
