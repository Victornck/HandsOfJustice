import {
  ArrowRight,
  CircleAlert,
  MessageSquare,
  UserRound,
  ShieldAlert,
  Clock3,
  CheckCheck,
  LockKeyhole,
} from 'lucide-react'

import { missionMessages } from '../../data/missionMessages'

interface MessageHistoryProps {
  playerName: string
  unlockedCount: number
  onRevealNext: () => void
  onOpenEvidence: () => void
}

export default function MessageHistory({
  playerName,
  unlockedCount,
  onRevealNext,
  onOpenEvidence,
}: MessageHistoryProps) {
  const visibleMessages = missionMessages.slice(0, unlockedCount)
  const hasMoreMessages = unlockedCount < missionMessages.length

  const warningCount = visibleMessages.filter(
    (message) => message.warning,
  ).length

  return (
    <div className="space-y-5">
      {/* Cabeçalho */}
      <header className="flex flex-wrap items-center gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#B5F33B]/25 bg-[#B5F33B]/[0.07]">
          <MessageSquare
            size={19}
            strokeWidth={1.7}
            className="text-[#B5F33B]"
          />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-white">
              Caixa de mensagens
            </h3>

            <span className="border border-[#B5F33B]/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#B5F33B]/80">
              MSG-001
            </span>
          </div>

          <p className="mt-1.5 text-[10px] text-white/40">
            Conversa fictícia · Remetente não verificado
          </p>
        </div>

        <div className="ml-auto flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-3 py-2">
          <MessageSquare size={12} className="text-white/35" />

          <span className="text-[9px] font-bold tabular-nums text-white/65">
            {visibleMessages.length}
            <span className="mx-1 text-white/25">/</span>
            {missionMessages.length}
          </span>
        </div>
      </header>

      {/* Janela de conversa */}
      <section className="overflow-hidden border border-white/[0.09] bg-[#0D0F0B]">
        {/* Barra da conversa */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] bg-[#191C14] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04]">
              <UserRound size={17} className="text-white/55" />

              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 border-2 border-[#191C14] bg-red-400" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-black uppercase tracking-wider text-white/80">
                Contato desconhecido
              </p>

              <p className="mt-1 flex items-center gap-1.5 text-[9px] text-red-300/75">
                <span className="h-1 w-1 bg-red-300/75" />
                Identidade não verificada
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-1.5 border border-white/[0.07] px-2 py-1.5 sm:flex">
            <LockKeyhole size={10} className="text-white/30" />

            <span className="text-[8px] font-bold uppercase tracking-wider text-white/30">
              Simulação
            </span>
          </div>
        </div>

        {/* Aviso de contexto */}
        <div className="flex items-start gap-2 border-b border-white/[0.06] bg-white/[0.015] px-4 py-3 sm:px-5">
          <ShieldAlert size={14} className="mt-0.5 shrink-0 text-[#B5F33B]/65" />

          <p className="text-[10px] leading-5 text-white/40">
            Analise o conteúdo das mensagens. As informações apresentadas
            fazem parte de uma simulação educativa.
          </p>
        </div>

        {/* Mensagens */}
        <div
          aria-live="polite"
          className="space-y-5 p-4 sm:p-6"
        >
          {visibleMessages.map((message) => {
            const isPlayer = message.sender === 'player'
            const isWarning = Boolean(message.warning)

            return (
              <article
                key={message.id}
                className={`flex min-w-0 items-start gap-2.5 sm:gap-3 ${
                  isPlayer ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isPlayer && (
                  <div className="mt-5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/[0.08] bg-[#191C14]">
                    <UserRound size={15} className="text-white/40" />
                  </div>
                )}

                <div
                  className={`min-w-0 w-full max-w-[88%] sm:max-w-[82%] ${
                    isPlayer ? 'items-end' : 'items-start'
                  }`}
                >
                  {/* Identificação da mensagem */}
                  <div
                    className={`mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] ${
                      isPlayer ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <span
                      className={`font-bold uppercase tracking-wider ${
                        isPlayer
                          ? 'text-[#B5F33B]/75'
                          : isWarning
                            ? 'text-red-200/80'
                            : 'text-white/45'
                      }`}
                    >
                      {isPlayer ? playerName : 'Remetente desconhecido'}
                    </span>

                    <span className="flex items-center gap-1 text-white/25">
                      <Clock3 size={10} />
                      {message.time}
                    </span>

                    {isWarning && (
                      <span className="flex items-center gap-1 border border-red-300/20 bg-red-300/[0.05] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-red-200/80">
                        <CircleAlert size={10} />
                        Alerta
                      </span>
                    )}
                  </div>

                  {/* Balão */}
                  <div
                    className={`relative border px-3.5 py-3.5 sm:px-4 ${
                      isWarning
                        ? 'border-red-300/25 bg-red-400/[0.045]'
                        : isPlayer
                          ? 'border-[#B5F33B]/20 bg-[#B5F33B]/[0.055]'
                          : 'border-white/[0.08] bg-[#191C14]'
                    }`}
                  >
                    {isWarning && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 top-0 w-0.5 bg-red-300/65"
                      />
                    )}

                    <p className="break-words text-xs leading-6 text-white/75">
                      {message.text}
                    </p>

                    {isPlayer && (
                      <div className="mt-2 flex justify-end">
                        <CheckCheck
                          size={13}
                          className="text-[#B5F33B]/50"
                          aria-label="Mensagem enviada na simulação"
                        />
                      </div>
                    )}
                  </div>

                  {/* Explicação educativa */}
                  {isWarning && (
                    <div className="mt-2.5 border border-red-300/[0.14] bg-red-400/[0.025]">
                      <div className="flex items-center gap-2 border-b border-red-300/[0.10] px-3 py-2.5">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-red-300/[0.08]">
                          <ShieldAlert size={13} className="text-red-200/80" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-red-200/60">
                            Análise de segurança
                          </p>

                          <p className="mt-0.5 break-words text-[10px] font-black uppercase tracking-wider text-red-100/90">
                            {message.warningTitle}
                          </p>
                        </div>
                      </div>

                      <p className="px-3 py-3 text-[11px] leading-6 text-white/55">
                        {message.explanation}
                      </p>
                    </div>
                  )}
                </div>

                {isPlayer && (
                  <div className="mt-5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#B5F33B]/20 bg-[#B5F33B]/[0.05]">
                    <UserRound size={15} className="text-[#B5F33B]/65" />
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Rodapé da conversa */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] bg-[#191C14]/60 px-4 py-3 sm:px-5">
          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/30">
            Histórico simulado
          </span>

          <span className="text-[8px] uppercase tracking-wider text-white/25">
            {hasMoreMessages ? 'Novas mensagens disponíveis' : 'Fim da conversa'}
          </span>
        </div>
      </section>

      {/* Painel da investigação */}
      <section className="relative overflow-hidden border border-[#B5F33B]/20 bg-[#B5F33B]/[0.035] p-4 sm:p-5">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-0.5 bg-[#B5F33B]"
        />

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#B5F33B]/20 bg-[#B5F33B]/[0.07]">
            <ShieldAlert size={15} className="text-[#B5F33B]" />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#B5F33B]">
              Sua investigação
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/35">
              Análise de mensagens
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-6 text-white/60">
          {hasMoreMessages
            ? 'Continue analisando a conversa. Novas mensagens podem revelar informações importantes para sua investigação.'
            : 'Você chegou ao final da conversa disponível. Revise os sinais encontrados e registre suas evidências.'}
        </p>

        {/* Indicadores */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="border border-white/[0.07] bg-black/15 p-3">
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/35">
              Mensagens lidas
            </p>

            <p className="mt-1.5 text-lg font-black tabular-nums text-white/80">
              {visibleMessages.length}
              <span className="ml-1 text-xs font-medium text-white/30">
                / {missionMessages.length}
              </span>
            </p>
          </div>

          <div className="border border-red-300/[0.12] bg-red-400/[0.025] p-3">
            <p className="text-[8px] font-bold uppercase tracking-wider text-red-200/55">
              Sinais de alerta
            </p>

            <p className="mt-1.5 text-lg font-black tabular-nums text-red-200/90">
              {warningCount}
            </p>
          </div>
        </div>

        {/* Ação principal */}
        {hasMoreMessages ? (
          <button
            type="button"
            onClick={onRevealNext}
            className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 bg-[#B5F33B] px-4 py-3 text-[10px] font-black uppercase tracking-[0.13em] text-[#12140F] transition-colors hover:bg-[#C9FF69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5F33B] active:scale-[0.99]"
          >
            Revelar próxima mensagem
            <ArrowRight size={15} />
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenEvidence}
            className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 bg-[#B5F33B] px-4 py-3 text-[10px] font-black uppercase tracking-[0.13em] text-[#12140F] transition-colors hover:bg-[#C9FF69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5F33B] active:scale-[0.99]"
          >
            Analisar evidências
            <ArrowRight size={15} />
          </button>
        )}
      </section>
    </div>
  )
}