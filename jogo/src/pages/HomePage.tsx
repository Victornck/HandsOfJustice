import {
  ArrowRight,
  Eye,
  Fingerprint,
  ShieldCheck,
  Zap,
} from 'lucide-react'

import PixelAvatar from '../components/PixelAvatar'
import { avatars } from '../data/avatars'

interface HomePageProps {
  onPlay: () => void
}

export default function HomePage({
  onPlay,
}: HomePageProps) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(#B5F33B 1px, transparent 1px), linear-gradient(90deg, #B5F33B 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 border border-[#B5F33B]/30 bg-[#B5F33B]/5 px-3 py-2">
              <span className="h-2 w-2 animate-pulse bg-[#B5F33B]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B5F33B] sm:text-xs">
                Uma nova missão começa
              </span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              O mundo digital esconde perigos.
            </p>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">
              SUAS
              <br />
              ESCOLHAS
              <br />
              <span className="text-[#B5F33B]">
                IMPORTAM.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Investigue situações, reconheça ameaças e
              aprenda a proteger sua identidade. Cada
              decisão pode mudar o rumo da missão.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onPlay}
                className="group flex min-h-14 items-center justify-center gap-3 bg-[#B5F33B] px-7 text-sm font-black uppercase tracking-wider text-[#12140F] transition hover:bg-[#C9FF69]"
              >
                JOGAR AGORA

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="#sobre"
                className="flex min-h-14 items-center justify-center gap-3 border border-white/15 px-7 text-sm font-bold uppercase tracking-wider transition hover:border-[#B5F33B]/60 hover:text-[#B5F33B]"
              >
                Conhecer o jogo

                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/40">
              <span className="flex items-center gap-2">
                <ShieldCheck
                  size={15}
                  className="text-[#B5F33B]"
                />
                Segurança digital
              </span>

              <span className="flex items-center gap-2">
                <Eye
                  size={15}
                  className="text-[#B5F33B]"
                />
                Investigação
              </span>

              <span className="flex items-center gap-2">
                <Zap
                  size={15}
                  className="text-[#B5F33B]"
                />
                Decisões interativas
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 bg-[#B5F33B]/10 blur-3xl" />

            <div className="relative border border-white/10 bg-[#1A1D16] p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Character.select
                </span>

                <span className="text-[10px] text-[#B5F33B]">
                  PLAYER_01
                </span>
              </div>

              <div className="relative mt-4 flex h-72 items-center justify-center overflow-hidden bg-[#12140F]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(#B5F33B 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                <div className="relative h-64 w-56">
                  <PixelAvatar
                    avatar={avatars[0]}
                    large
                  />
                </div>

                <span className="absolute bottom-4 right-4 text-[9px] font-bold uppercase tracking-widest text-[#B5F33B]">
                  Ready
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-black uppercase">
                    Seu próximo desafio
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Escolha quem vai viver essa aventura.
                  </p>
                </div>

                <Fingerprint
                  size={25}
                  className="shrink-0 text-[#B5F33B]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#191C15]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          <div className="flex items-center gap-4 py-6 md:px-6 md:first:pl-0">
            <ShieldCheck
              className="shrink-0 text-[#B5F33B]"
              size={25}
            />

            <div>
              <p className="text-sm font-black uppercase">
                Proteja seus dados
              </p>

              <p className="mt-1 text-xs text-white/40">
                Cuide da sua privacidade.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 md:px-6">
            <Eye
              className="shrink-0 text-[#B5F33B]"
              size={25}
            />

            <div>
              <p className="text-sm font-black uppercase">
                Investigue os sinais
              </p>

              <p className="mt-1 text-xs text-white/40">
                Reconheça situações suspeitas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 md:px-6">
            <Zap
              className="shrink-0 text-[#B5F33B]"
              size={25}
            />

            <div>
              <p className="text-sm font-black uppercase">
                Escolha com atenção
              </p>

              <p className="mt-1 text-xs text-white/40">
                Descubra alternativas seguras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B5F33B]">
          CONHECIMENTO É PODER
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
          A melhor defesa começa com informação.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
          Uma experiência educativa sobre segurança
          digital, prevenção e reconhecimento de situações
          de risco.
        </p>
      </section>
    </>
  )
}