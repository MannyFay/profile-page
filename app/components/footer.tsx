import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-2 mt-auto">
      <p className="text-center text-sm">&copy; {currentYear} Manuel-Hubertus Fay</p>
      <Link
        to="/site-notice"
        className="mt-2 block text-center text-sm text-stone-400 hover:text-stone-200"
      >
        Site Notice
      </Link>
    </footer>
  );
}
