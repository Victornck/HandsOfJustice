import type { ReactNode } from 'react'
import {
  Activity,
  ShieldCheck,
  X,
  Minus,
  Maximize2,
  Terminal,
} from 'lucide-react'

interface ComputerFrameProps {
  children: ReactNode
  playerName: string
}

export default function ComputerFrame({
  children,
  playerName,
}: ComputerFrameProps) {
  return (
    <section className="relative overflow-hidden border border-[#B5F33B]/20 bg-[#12140F] shadow-[0_0_50px_rgba(181,243,59,0.04)]">
      {/* Detalhes decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#B5F33B]/60 to-transparent"
      />

      {/* Barra superior */}
      <header className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#191C14] px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#B5F33B]/25 bg-[#B5F33B]/[0.08]">
            <ShieldCheck
              size={21}
              strokeWidth={1.8}
              className="text-[#B5F33B]"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white">
                Justice Terminal
              </h2>

              <span className="border border-[#B5F33B]/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#B5F33B]/80">
                JF-01
              </span>
            </div>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/35">
              Central de investigação
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 border-r border-white/10 pr-4 sm:flex">
            <Activity
              size={14}
              className="text-[#B5F33B]"
            />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#B5F33B]">
                Sistema ativo
              </p>
              <p className="mt-0.5 text-[8px] uppercase tracking-wider text-white/30">
                Ambiente seguro
              </p>
            </div>
          </div>

          <div className="flex max-w-36 items-center gap-2 border border-white/10 bg-black/20 px-2.5 py-2 sm:px-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping bg-[#B5F33B]/30" />
              <span className="relative inline-flex h-2 w-2 bg-[#B5F33B]" />
            </span>

            <span className="max-w-28 truncate text-[9px] font-bold uppercase tracking-wider text-white/75">
              {playerName}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="hidden items-center gap-1.5 text-white/25 sm:flex"
          >
            <Minus size={14} />
            <Maximize2 size={12} />
            <X size={14} />
          </div>
        </div>
      </header>

      {/* Barra de informações */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/[0.07] bg-[#0D0F0B] px-4 py-2.5 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#B5F33B]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/45">
              Ambiente de treinamento
            </span>
          </div>

          <span className="hidden h-3 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-1.5">
            <Terminal size={11} className="text-white/30" />
            <span className="text-[8px] font-medium uppercase tracking-wider text-white/30">
              Conexão simulada
            </span>
          </div>
        </div>

        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#B5F33B]/60">
          Operação em andamento
        </span>
      </div>

      {/* Área principal */}
      <div className="relative min-h-[420px]">
        {children}
      </div>

      {/* Rodapé */}
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0D0F0B] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <ShieldCheck size={12} className="text-[#B5F33B]/50" />

          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/35">
            Hands of Justice
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[8px] uppercase tracking-wider text-white/25">
            Terminal v1.0
          </span>

          <span className="h-1 w-1 bg-white/20" />

          <span className="text-[8px] font-bold uppercase tracking-wider text-[#B5F33B]/50">
            Sistema operacional
          </span>
        </div>
      </footer>
    </section>
  )
}