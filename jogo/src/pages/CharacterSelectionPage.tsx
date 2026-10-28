import {
  ArrowLeft,
  ArrowRight,
  Check,
  Fingerprint,
  ShieldCheck,
  UserRound,
} from 'lucide-react'

import PixelAvatar from '../components/PixelAvatar'
import { avatars } from '../data/avatars'

import type { Avatar } from '../types/game'

interface CharacterSelectionPageProps {
  selectedId: number | null
  playerName: string
  onSelect: (id: number) => void
  onNameChange: (name: string) => void
  onConfirm: () => void
  onBack: () => void
}

export default function CharacterSelectionPage({
  selectedId,
  playerName,
  onSelect,
  onNameChange,
  onConfirm,
  onBack,
}: CharacterSelectionPageProps) {
  const selectedAvatar: Avatar | null =
    avatars.find((avatar) => avatar.id === selectedId) ?? null

  return (
    <section className="relative min-h-[calc(100vh-81px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#B5F33B 1px, transparent 1px), linear-gradient(90deg, #B5F33B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition hover:text-[#B5F33B]"
          >
            <ArrowLeft size={17} />
            Voltar ao início
          </button>

          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B5F33B]">
            Etapa 01 / 03
          </span>
        </div>

        <div className="mb-10 mt-12 text-center sm:mb-14 sm:mt-16">
          <div className="mb-4 inline-flex items-center gap-2 border border-[#B5F33B]/30 bg-[#B5F33B]/5 px-3 py-2">
            <UserRound
              size={15}
              className="text-[#B5F33B]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B5F33B]">
              Identidade do jogador
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            ESCOLHA SEU
            <br />
            <span className="text-[#B5F33B]">
              PERSONAGEM.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
            Selecione o avatar que vai representar você
            nesta aventura.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Selecione seu avatar
              </span>

              <span className="text-[10px] text-white/30">
                {avatars.length} PERSONAGENS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {avatars.map((avatar, index) => {
                const isSelected = selectedId === avatar.id

                return (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => onSelect(avatar.id)}
                    aria-pressed={isSelected}
                    className={`group relative overflow-hidden border p-3 text-left transition duration-200 sm:p-5 ${
                      isSelected
                        ? 'border-[#B5F33B] bg-[#B5F33B]/10'
                        : 'border-white/10 bg-[#191C15] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-bold tracking-widest ${
                          isSelected
                            ? 'text-[#B5F33B]'
                            : 'text-white/30'
                        }`}
                      >
                        AVATAR_0{index + 1}
                      </span>

                      <span
                        className={`flex h-6 w-6 items-center justify-center border ${
                          isSelected
                            ? 'border-[#B5F33B] bg-[#B5F33B] text-[#12140F]'
                            : 'border-white/15 text-transparent'
                        }`}
                      >
                        <Check size={14} />
                      </span>
                    </div>

                    <div
                      className={`relative mt-3 flex h-36 items-center justify-center overflow-hidden sm:h-44 ${
                        isSelected
                          ? 'bg-[#B5F33B]/5'
                          : 'bg-[#12140F]'
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            'radial-gradient(#B5F33B 1px, transparent 1px)',
                          backgroundSize: '16px 16px',
                        }}
                      />

                      <div className="relative h-36 w-32 transition-transform duration-200 group-hover:scale-105 sm:h-40 sm:w-36">
                        <PixelAvatar avatar={avatar} />
                      </div>

                      {isSelected && (
                        <span className="absolute bottom-2 right-2 bg-[#B5F33B] px-2 py-1 text-[9px] font-black uppercase tracking-widest text-[#12140F]">
                          Selecionado
                        </span>
                      )}
                    </div>

                    <div className="mt-4">
                      <h2 className="text-lg font-black uppercase">
                        {avatar.name}
                      </h2>

                      <p className="mt-1 text-xs leading-5 text-white/40">
                        {avatar.description}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <aside className="border border-white/10 bg-[#191C15] p-5 sm:p-7 lg:sticky lg:top-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Sua identidade
              </span>

              <Fingerprint
                size={21}
                className="text-[#B5F33B]"
              />
            </div>

            <div className="relative mt-5 flex min-h-52 items-center justify-center overflow-hidden bg-[#12140F] sm:min-h-64">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(#B5F33B 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              {selectedAvatar ? (
                <div className="relative h-52 w-44 sm:h-60 sm:w-48">
                  <PixelAvatar
                    avatar={selectedAvatar}
                    large
                  />
                </div>
              ) : (
                <div className="relative px-5 text-center">
                  <UserRound
                    size={45}
                    className="mx-auto text-white/20"
                  />

                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/40">
                    Nenhum personagem selecionado
                  </p>

                  <p className="mt-2 text-xs text-white/30">
                    Escolha um avatar para continuar.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="player-name"
                className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60"
              >
                Nome do jogador
              </label>

              <input
                id="player-name"
                type="text"
                maxLength={20}
                value={playerName}
                onChange={(event) =>
                  onNameChange(event.target.value)
                }
                placeholder="Digite seu nome..."
                className="min-h-12 w-full border border-white/15 bg-[#12140F] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#B5F33B]"
              />

              <p className="mt-2 text-[10px] text-white/30">
                Até 20 caracteres. Você pode usar um apelido.
              </p>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={20}
                  className="shrink-0 text-[#B5F33B]"
                />

                <p className="text-xs leading-5 text-white/50">
                  Todos os personagens possuem as mesmas
                  capacidades. Sua escolha é apenas visual.
                </p>
              </div>
            </div>

            <button
              type="button"
              disabled={!selectedAvatar || !playerName.trim()}
              onClick={onConfirm}
              className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 bg-[#B5F33B] px-5 text-sm font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
            >
              Confirmar personagem
              <ArrowRight size={18} />
            </button>
          </aside>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-widest text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>HANDS OF JUSTICE</span>
          <span>APRENDER · INVESTIGAR · PROTEGER</span>
        </div>
      </div>
    </section>
  )
}