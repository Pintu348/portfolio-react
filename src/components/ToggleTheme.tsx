import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [theme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='p-2 border rounded bg-gray-200 dark:bg-gray-800'
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
