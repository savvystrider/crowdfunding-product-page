import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <header>
      <img src="assets/logo.svg" alt="CrowdFund Logo" className="logo" />
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        aria-expanded={navOpen}
        aria-controls="menu"
        onClick={handleNav}
      >
        <img src="assets/icon-hamburger.svg" alt="" />
      </button>
      {navOpen && (
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => setNavOpen((prev) => !prev)}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setNavOpen((prev) => !prev)}>
                Disover
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setNavOpen((prev) => !prev)}>
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
