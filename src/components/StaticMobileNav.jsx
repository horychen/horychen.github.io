const links = [
  { href: '/', label: 'Home' },
  { href: '/courses/', label: 'Courses' },
  { href: '/docs/', label: 'Docs' },
  { href: '/alumni/', label: 'Alumni' },
  { href: '/#pi', label: 'PI' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
  { href: '/motor/', label: 'Motor Demos' },
];

export default function StaticMobileNav() {
  return (
    <div className="static-mobile-navigation">
      <a
        className="static-mobile-menu-trigger"
        href="#static-mobile-menu"
        aria-label="Open navigation menu"
      >
        <span className="static-mobile-menu-icon" aria-hidden="true" />
      </a>

      <nav
        id="static-mobile-menu"
        className="static-mobile-menu"
        aria-label="Mobile navigation"
      >
        <div className="static-mobile-menu-heading">Navigate</div>
        <a
          className="static-mobile-menu-close"
          href="#menu-closed"
          aria-label="Close navigation menu"
        >
          <span className="static-mobile-menu-close-icon" aria-hidden="true" />
        </a>
        <div className="static-mobile-menu-links">
          {links.map((link) => (
            <a key={link.href} className="static-mobile-menu-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
