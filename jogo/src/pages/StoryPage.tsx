import { useState } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  SkipForward,
} from 'lucide-react'

import PixelAvatar from '../components/PixelAvatar'
import { introductionStory } from '../data/story'

import type { Avatar } from '../types/game'

interface StoryPageProps {
  playerName: string
  avatar: Avatar
  onBack: () => void
  onContinue: () => void
}

export default function StoryPage({
  playerName,
  avatar,
  onBack,
  onContinue,
}: StoryPageProps) {
  const [dialogueIndex, setDialogueIndex] = useState(0)

  const currentDialogue = introductionStory[dialogueIndex]

  const progress =
    ((dialogueIndex + 1) / introductionStory.length) * 100

  const isLastDialogue =
    dialogueIndex === introductionStory.length - 1

  function advanceDialogue() {
    if (isLastDialogue) {
      onContinue()
      return
    }

    setDialogueIndex((current) => current + 1)
  }

  function skipIntroduction() {
    onContinue()
  }

  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden">
      {/* Fundo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(#B5F33B 1px, transparent 1px), linear-gradient(90deg, #B5F33B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-10 lg:px-12">
        {/* Navegação e progresso */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition hover:text-[#B5F33B]"
          >
            <ArrowLeft size={16} />
            Voltar
          </button>

          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B5F33B]">
            Introdução narrativa
          </span>
        </div>

        <div
          className="mt-5 h-1 overflow-hidden bg-white/10"
          role="progressbar"
          aria-label="Progresso da história"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full bg-[#B5F33B] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Cabeçalho da cena */}
        <div className="mb-6 mt-8 sm:mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B5F33B]">
            HANDS OF JUSTICE
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">
            SUA HISTÓRIA
            <span className="text-[#B5F33B]"> COMEÇA.</span>
          </h1>

          <p className="mt-3 text-sm text-white/45">
            Leia atentamente. Cada detalhe pode ser importante.
          </p>
        </div>

        {/* Cenário */}
        <div className="relative overflow-hidden border border-white/10 bg-[#191C15]">
          <div className="relative grid min-h-[320px] items-end overflow-hidden bg-[#10120D] sm:min-h-[390px] lg:grid-cols-[0.8fr_1.2fr]">
            {/* Luzes e cenário decorativo */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 72% 35%, rgba(181,243,59,0.10), transparent 48%), linear-gradient(180deg, #171B12 0%, #10120D 100%)',
              }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(#B5F33B 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Janela */}
            <div
              aria-hidden="true"
              className="absolute right-[8%] top-[12%] hidden h-36 w-44 border-4 border-[#343A2B] bg-[#1B2417] sm:block"
            >
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#343A2B]" />

              <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-[#343A2B]" />

              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[#B5F33B]/5" />
            </div>

            {/* Personagem */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-xs flex-col items-center justify-end px-6 pt-8">
              <div className="mb-2 text-center">
                <span className="border border-[#B5F33B]/30 bg-[#12140F]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#B5F33B]">
                  Jogador
                </span>
              </div>

              <div className="h-56 w-48 sm:h-64 sm:w-52">
                <PixelAvatar avatar={avatar} large />
              </div>

              <div className="mb-5 text-center">
                <p className="text-lg font-black uppercase">
                  {playerName}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {avatar.name}
                </p>
              </div>
            </div>

            {/* Computador e notificação */}
            <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-7 sm:px-8 lg:pb-12">
              <div className="mx-auto w-full max-w-md">
                <div className="border border-white/10 bg-[#1A1D16] shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-[#B5F33B]" />

                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                        Terminal pessoal
                      </span>
                    </div>

                    <span className="text-[9px] text-white/30">
                      ONLINE
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#B5F33B]/30 bg-[#B5F33B]/10">
                        <MessageSquare
                          size={19}
                          className="text-[#B5F33B]"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase">
                          Nova notificação
                        </p>

                        <p className="mt-1 text-[10px] text-white/40">
                          Uma mensagem aguarda sua atenção.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-l-2 border-[#B5F33B] bg-[#12140F] p-4">
                      <p className="text-xs leading-6 text-white/70">
                        A próxima decisão pode parecer simples.
                        Mas vale a pena observar os detalhes antes
                        de agir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  <ShieldCheck size={13} />

                  Ambiente de investigação
                </div>
              </div>
            </div>
          </div>

          {/* Caixa de diálogo */}
          <div className="border-t border-white/10 bg-[#191C15] p-5 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#B5F33B]/30 bg-[#B5F33B]/10">
                <MessageSquare
                  size={19}
                  className="text-[#B5F33B]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B5F33B]">
                    {currentDialogue.speaker}
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                    {dialogueIndex + 1} / {introductionStory.length}
                  </span>
                </div>

                <h2 className="mt-2 text-sm font-black uppercase leading-6 text-white sm:text-base">
                  {currentDialogue.label}
                </h2>

                <p
                  key={dialogueIndex}
                  className="mt-3 animate-[fadeIn_0.3s_ease-out] text-sm leading-7 text-white/65 sm:text-base"
                >
                  {currentDialogue.text}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={skipIntroduction}
                className="flex min-h-11 items-center justify-center gap-2 px-4 text-xs font-bold uppercase tracking-widest text-white/40 transition hover:text-white"
              >
                <SkipForward size={15} />
                Pular introdução
              </button>

              <button
                type="button"
                onClick={advanceDialogue}
                className="flex min-h-12 items-center justify-center gap-3 bg-[#B5F33B] px-6 text-xs font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69]"
              >
                {isLastDialogue
                  ? 'Preparar missão'
                  : 'Continuar'}

                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-widest text-white/25">
          <span>Capítulo 01</span>
          <span>Aprender · Investigar · Proteger</span>
        </div>
      </div>
    </section>
  )
}