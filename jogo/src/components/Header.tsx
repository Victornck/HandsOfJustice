import {
  Gamepad2,
  ShieldCheck,
} from 'lucide-react'

interface HeaderProps {
  onHome: () => void
  onCharacters: () => void
}

export default function Header({
  onHome,
  onCharacters,
}: HeaderProps) {
  return (
    <header className="relative z-10 border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-3 text-left"
          aria-label="Voltar à tela inicial"
        >
          <div className="flex h-10 w-10 items-center justify-center bg-[#B5F33B] text-[#12140F]">
            <ShieldCheck size={25} strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-lg font-black uppercase leading-none tracking-tight">
              HANDS<span className="text-[#B5F33B]">.</span>
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
              Of Justice
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          <button
            type="button"
            onClick={onHome}
            className="transition hover:text-[#B5F33B]"
          >
            Início
          </button>

          <button
            type="button"
            onClick={onCharacters}
            className="transition hover:text-[#B5F33B]"
          >
            Personagens
          </button>
        </div>

        <div className="flex items-center gap-2 border border-[#B5F33B]/30 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#B5F33B]">
          <Gamepad2 size={16} />

          <span className="hidden sm:inline">
            Modo aventura
          </span>
        </div>
      </nav>
    </header>
  )
}