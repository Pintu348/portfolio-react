import { useEffect, useState, useRef } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#projects", label: "Projects" },
  { to: "#contact", label: "Contact" },
];

const navLinkBase =
  "text-sm font-medium transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400";
const navLinkActive =
  "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800";
const navLinkInactive =
  "text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300 hover:bg-gray-100 dark:hover:bg-gray-800";
const sections = ["home", "about", "projects", "contact"];
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const [activeId, setActiveId] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Helper to close drawer and scroll to section
  const handleNavClick = (to: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        rootMargin: "-200px 0px -400px 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <nav className='bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 fixed w-full z-50 shadow-sm transition-colors'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
          <a
            href='#home'
            className='flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight'
            onClick={() => handleNavClick("#home")}
          >
            {/* Optional: Add a logo/icon */}
            {/* <span className="inline-block"><YourLogoIcon /></span> */}
            Pintu.dev
          </a>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-6'>
            {navLinks.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(to);
                }}
                className={`${navLinkBase} ${navLinkInactive} ${
                  to?.slice(1) === activeId ? navLinkActive : ""
                }`}
              >
                {label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='ml-2 p-2 rounded transition bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400'
              title='Toggle Theme'
              aria-label='Toggle Theme'
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setDrawerOpen(true)}
              className='p-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
              aria-label='Open Menu'
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity'
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-modal='true'
        role='dialog'
      >
        <div className='p-6 flex flex-col h-full'>
          {/* Header with Close */}
          <div className='flex justify-between items-center mb-6'>
            <span className='text-lg font-semibold text-indigo-600 dark:text-indigo-400'>
              Menu
            </span>
            <button
              onClick={() => setDrawerOpen(false)}
              className='p-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
              aria-label='Close Menu'
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-col space-y-4 flex-1'>
            {navLinks.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(to);
                }}
                className={`${navLinkBase} ${navLinkInactive} ${
                  to?.slice(1) === activeId ? navLinkActive : ""
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-700'>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded transition'
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
