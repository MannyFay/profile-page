import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { navigationLinks } from '~/data/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setHasBeenOpened(true);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="fixed left-0 top-0 z-20 h-14 w-full bg-stone-900 p-2 shadow-sm shadow-stone-900 lg:h-16">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <img
            src="/images/profile.webp"
            alt="Manuel-Hubertus Fay"
            className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
          />

          <div className="flex">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm text-stone-50 focus:outline-none lg:h-12 lg:w-12"
              aria-controls="navbar-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`hamburger ${isMenuOpen ? 'hamburger-active' : hasBeenOpened ? 'hamburger-closing' : ''}`}
                viewBox="0 0 100 100"
                width="200"
              >
                <rect
                  className="hamburger-bar hamburger-bar-top fill-stone-50"
                  width="50"
                  height="5"
                  x="25"
                  y="26"
                  rx="3"
                />
                <rect
                  className="hamburger-bar hamburger-bar-middle fill-stone-50"
                  width="50"
                  height="5"
                  x="25"
                  y="45"
                  rx="3"
                />
                <rect
                  className="hamburger-bar hamburger-bar-bottom fill-stone-50"
                  width="50"
                  height="5"
                  x="25"
                  y="64"
                  rx="3"
                />
              </svg>
            </button>
          </div>

          <div
            id="navbar-menu"
            className={`${isMenuOpen ? 'block' : 'hidden'} w-full items-center justify-between`}
          >
            <ul className="flex h-screen flex-col gap-4 bg-stone-900 pt-8 text-center text-xl lg:gap-8 lg:pt-16">
              {navigationLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`block py-3 ${isActive ? 'text-stone-500' : 'text-stone-50 hover:text-stone-300'}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
