export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/30 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>
          © {new Date().getFullYear()} HANDS OF JUSTICE
        </p>

        <p>
          Uma experiência educativa interativa.
        </p>
      </div>
    </footer>
  )
}