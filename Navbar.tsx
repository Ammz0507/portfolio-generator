export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-slate-800 flex items-center justify-between rounded-t shadow">
      <span className="font-bold text-slate-200 text-lg tracking-wide">PortfolioGen</span>
      <a
        href="https://github.com/your-username/portfolio-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-indigo-200 font-medium"
      >
        GitHub
      </a>
    </nav>
  );
}
