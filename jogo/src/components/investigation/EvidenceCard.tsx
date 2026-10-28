import {
  Check,
  CircleAlert,
  FileSearch,
  ChevronRight,
  ShieldAlert,
  ScanSearch,
} from 'lucide-react'

import type { Evidence } from '../../data/mission'

interface EvidenceCardProps {
  evidence: Evidence
  selected: boolean
  showFeedback: boolean
  onToggle: (id: string) => void
}

export default function EvidenceCard({
  evidence,
  selected,
  showFeedback,
  onToggle,
}: EvidenceCardProps) {
  const isCorrect = evidence.isWarning
  const isIncorrectSelection =
    showFeedback && selected && !isCorrect

  let cardStyle =
    'border-white/[0.08] bg-[#12140F] hover:border-white/20 hover:bg-white/[0.015]'

  if (selected && !showFeedback) {
    cardStyle =
      'border-[#B5F33B]/45 bg-[#B5F33B]/[0.045] shadow-[inset_0_0_24px_rgba(181,243,59,0.025)]'
  }

  if (showFeedback && isCorrect) {
    cardStyle =
      'border-[#B5F33B]/35 bg-[#B5F33B]/[0.035]'
  }

  if (isIncorrectSelection) {
    cardStyle =
      'border-red-300/30 bg-red-400/[0.025]'
  }

  const statusLabel = showFeedback
    ? isCorrect
      ? 'Sinal de alerta'
      : selected
        ? 'Revisar seleção'
        : 'Contexto'
    : selected
      ? 'Selecionada'
      : 'Não analisada'

  return (
    <button
      type="button"
      onClick={() => onToggle(evidence.id)}
      disabled={showFeedback}
      aria-pressed={selected}
      className={`group relative w-full overflow-hidden border p-4 text-left transition-all duration-200 sm:p-5 ${cardStyle} ${
        showFeedback
          ? 'cursor-default'
          : 'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5F33B]'
      }`}
    >
      {/* Indicador lateral */}
      <span
        aria-hidden="true"
        className={`absolute bottom-0 left-0 top-0 w-0.5 transition-colors ${
          isIncorrectSelection
            ? 'bg-red-300/70'
            : showFeedback && isCorrect
              ? 'bg-[#B5F33B]'
              : selected
                ? 'bg-[#B5F33B]/70'
                : 'bg-transparent group-hover:bg-white/20'
        }`}
      />

      <div className="flex items-start gap-3 sm:gap-4">
        {/* Ícone */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
            showFeedback && isCorrect
              ? 'border-[#B5F33B]/25 bg-[#B5F33B]/[0.08] text-[#B5F33B]'
              : isIncorrectSelection
                ? 'border-red-300/20 bg-red-300/[0.06] text-red-200'
                : selected
                  ? 'border-[#B5F33B]/30 bg-[#B5F33B]/[0.08] text-[#B5F33B]'
                  : 'border-white/[0.07] bg-white/[0.025] text-white/40 group-hover:text-white/70'
          }`}
        >
          {showFeedback && isCorrect ? (
            <Check size={18} strokeWidth={2} />
          ) : isIncorrectSelection ? (
            <CircleAlert size={18} strokeWidth={1.8} />
          ) : selected ? (
            <ScanSearch size={18} strokeWidth={1.8} />
          ) : (
            <FileSearch size={18} strokeWidth={1.8} />
          )}
        </div>

        {/* Conteúdo */}
        <div className="min-w-0 flex-1">
          {/* Identificação */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.17em] text-white/30">
                Registro de investigação
              </p>

              <h3 className="break-words text-xs font-black uppercase leading-relaxed tracking-wider text-white/90">
                {evidence.title}
              </h3>
            </div>

            <span
              className={`inline-flex shrink-0 items-center gap-1.5 border px-2 py-1 text-[8px] font-bold uppercase tracking-wider ${
                showFeedback && isCorrect
                  ? 'border-[#B5F33B]/20 bg-[#B5F33B]/[0.05] text-[#B5F33B]'
                  : isIncorrectSelection
                    ? 'border-red-300/20 bg-red-300/[0.04] text-red-200/80'
                    : selected
                      ? 'border-[#B5F33B]/20 text-[#B5F33B]/80'
                      : 'border-white/[0.07] text-white/35'
              }`}
            >
              {showFeedback && isCorrect ? (
                <Check size={10} />
              ) : isIncorrectSelection ? (
                <CircleAlert size={10} />
              ) : (
                <span
                  className={`h-1 w-1 ${
                    selected ? 'bg-[#B5F33B]' : 'bg-white/25'
                  }`}
                />
              )}

              {statusLabel}
            </span>
          </div>

          {/* Descrição */}
          <p className="mt-3 text-xs leading-6 text-white/50">
            {evidence.description}
          </p>

          {/* Instrução quando ainda não há feedback */}
          {!showFeedback && (
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-3">
              <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/30">
                {selected
                  ? 'Marcada para análise'
                  : 'Selecione para analisar'}
              </span>

              <ChevronRight
                size={14}
                className={`shrink-0 transition-transform ${
                  selected
                    ? 'translate-x-0.5 text-[#B5F33B]/70'
                    : 'text-white/25 group-hover:translate-x-0.5 group-hover:text-white/60'
                }`}
              />
            </div>
          )}

          {/* Feedback após análise */}
          {showFeedback && (
            <div className="mt-4 border-t border-white/[0.08] pt-4">
              <div
                className={`flex items-center gap-2 ${
                  isCorrect
                    ? 'text-[#B5F33B]'
                    : isIncorrectSelection
                      ? 'text-red-200'
                      : 'text-white/50'
                }`}
              >
                {isCorrect ? (
                  <ShieldAlert size={14} />
                ) : isIncorrectSelection ? (
                  <CircleAlert size={14} />
                ) : (
                  <FileSearch size={14} />
                )}

                <p className="text-[9px] font-black uppercase tracking-[0.15em]">
                  {isCorrect
                    ? 'Sinal de alerta identificado'
                    : isIncorrectSelection
                      ? 'Seleção incorreta'
                      : 'Contexto importante'}
                </p>
              </div>

              <p className="mt-2.5 text-xs leading-6 text-white/60">
                {evidence.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </button>
  )
}