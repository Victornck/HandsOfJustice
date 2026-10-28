import { useState } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileSearch,
  RotateCcw,
  ShieldCheck,
  UserRound,
} from 'lucide-react'

import PixelAvatar from '../components/PixelAvatar'
import ComputerFrame from '../components/investigation/ComputerFrame'
import InvestigationSidebar from '../components/investigation/InvestigationSidebar'
import EvidenceCard from '../components/investigation/EvidenceCard'
import MessageHistory from '../components/investigation/MessageHistory'

import { missionChoices, missionEvidence } from '../data/mission'
import { missionMessages } from '../data/missionMessages'

import type { Avatar } from '../types/game'
import type { InvestigationTab } from '../components/investigation/InvestigationSidebar'

interface MissionPageProps {
  playerName: string
  avatar: Avatar
  onHome: () => void
}

type MissionPhase = 'investigation' | 'decision' | 'result'

export default function MissionPage({
  playerName,
  avatar,
  onHome,
}: MissionPageProps) {
  const [phase, setPhase] = useState<MissionPhase>('investigation')

  const [activeTab, setActiveTab] =
    useState<InvestigationTab>('messages')

  const [unlockedMessageCount, setUnlockedMessageCount] = useState(3)

  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([])

  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)

  const [showEvidenceFeedback, setShowEvidenceFeedback] = useState(false)

  const correctEvidence = missionEvidence
    .filter((evidence) => evidence.isWarning)
    .map((evidence) => evidence.id)

  const correctCount = selectedEvidence.filter((id) =>
    correctEvidence.includes(id),
  ).length

  const falsePositiveCount = selectedEvidence.filter(
    (id) => !correctEvidence.includes(id),
  ).length

  const missingCount = correctEvidence.filter(
    (id) => !selectedEvidence.includes(id),
  ).length

  const evidenceScore = Math.max(
    0,
    correctEvidence.length - missingCount - falsePositiveCount,
  )

  const choice = missionChoices.find(
    (item) => item.id === selectedChoice,
  )

  const finalScore = evidenceScore + (choice?.isSafe ? 2 : 0)

  const progress =
    phase === 'investigation' ? 33 : phase === 'decision' ? 66 : 100

  function revealNextMessage() {
    setUnlockedMessageCount((current) =>
      Math.min(current + 1, missionMessages.length),
    )
  }

  function toggleEvidence(id: string) {
    if (showEvidenceFeedback) return

    setSelectedEvidence((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  function restartMission() {
    setPhase('investigation')
    setActiveTab('messages')
    setUnlockedMessageCount(3)
    setSelectedEvidence([])
    setSelectedChoice(null)
    setShowEvidenceFeedback(false)
  }

  function finishMission() {
    if (!selectedChoice) return
    setPhase('result')
  }

  function renderInvestigationContent() {
    if (activeTab === 'messages') {
      return (
        <MessageHistory
          playerName={playerName}
          unlockedCount={unlockedMessageCount}
          onRevealNext={revealNextMessage}
          onOpenEvidence={() => setActiveTab('evidence')}
        />
      )
    }

    if (activeTab === 'profile') {
      return (
        <div className="space-y-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-10 w-10 items-center justify-center border border-[#B5F33B]/30 bg-[#B5F33B]/10">
              <UserRound size={19} className="text-[#B5F33B]" />
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-widest">
                Perfil investigado
              </h3>

              <p className="mt-1 text-[10px] text-white/40">
                Informações disponíveis no cenário
              </p>
            </div>
          </div>

          <div className="border border-white/10 bg-[#12140F] p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-[#1B1F16]">
                <UserRound size={27} className="text-white/40" />
              </div>

              <div>
                <p className="text-sm font-black uppercase">
                  Perfil não verificado
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-amber-300/80">
                  Identidade não confirmada
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="border-t border-white/10 pt-4">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">
                  Tipo de contato
                </p>

                <p className="mt-2 text-xs text-white/70">
                  Pessoa que oferece uma oportunidade de trabalho.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">
                  Informações sobre a empresa
                </p>

                <p className="mt-2 text-xs leading-6 text-white/70">
                  Nenhum nome de empresa ou registro foi fornecido na conversa.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">
                  Condições de trabalho
                </p>

                <p className="mt-2 text-xs leading-6 text-white/70">
                  As atividades, a remuneração e as condições ainda não foram esclarecidas.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-amber-300/60 bg-amber-300/5 p-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-200">
              Atenção
            </p>

            <p className="mt-2 text-xs leading-6 text-white/60">
              A ausência de informações impede a verificação da proposta.
              Isso não comprova, por si só, que o remetente esteja cometendo um crime.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('evidence')}
            className="flex min-h-11 w-full items-center justify-center gap-2 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 transition hover:border-[#B5F33B]/40 hover:text-[#B5F33B]"
          >
            <FileSearch size={15} />
            Registrar sinais de alerta
          </button>
        </div>
      )
    }

    return (
      <div className="space-y-5">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="flex h-10 w-10 items-center justify-center border border-[#B5F33B]/30 bg-[#B5F33B]/10">
            <FileSearch size={19} className="text-[#B5F33B]" />
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest">
              Registro de evidências
            </h3>

            <p className="mt-1 text-[10px] text-white/40">
              Selecione os sinais encontrados na conversa
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {missionEvidence.map((evidence) => (
            <EvidenceCard
              key={evidence.id}
              evidence={evidence}
              selected={selectedEvidence.includes(evidence.id)}
              showFeedback={showEvidenceFeedback}
              onToggle={toggleEvidence}
            />
          ))}
        </div>

        {!showEvidenceFeedback ? (
          <button
            type="button"
            onClick={() => setShowEvidenceFeedback(true)}
            className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#B5F33B] px-5 text-xs font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69]"
          >
            Verificar evidências
            <ArrowRight size={16} />
          </button>
        ) : (
          <div className="space-y-4">
            <div className="border border-[#B5F33B]/20 bg-[#B5F33B]/5 p-4">
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[#B5F33B]" />

                <p className="text-xs font-black uppercase">
                  Análise concluída
                </p>
              </div>

              <p className="mt-3 text-xs leading-6 text-white/60">
                Você identificou {correctCount} de {correctEvidence.length} sinais de alerta.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setPhase('decision')}
              className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#B5F33B] px-5 text-xs font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69]"
            >
              Escolher como agir
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#B5F33B 1px, transparent 1px), linear-gradient(90deg, #B5F33B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onHome}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/45 transition hover:text-[#B5F33B]"
          >
            <ArrowLeft size={15} />
            Sair da missão
          </button>

          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B5F33B]">
            Missão 01
          </span>
        </div>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B5F33B]">
              Operação em andamento
            </p>

            <h1 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
              Central de <span className="text-[#B5F33B]">investigação</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden h-12 w-10 sm:block">
              <PixelAvatar avatar={avatar} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">
                Agente responsável
              </p>

              <p className="mt-1 text-xs font-black uppercase">
                {playerName}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5 h-1 overflow-hidden bg-white/10">
          <div
            className="h-full bg-[#B5F33B] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {phase === 'investigation' ? (
          <ComputerFrame playerName={playerName}>
            <div className="grid min-h-[420px] lg:grid-cols-[210px_minmax(0,1fr)]">
              <InvestigationSidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                evidenceCount={selectedEvidence.length}
              />

              <div className="min-w-0 p-4 sm:p-6 lg:p-8">
                {renderInvestigationContent()}
              </div>
            </div>
          </ComputerFrame>
        ) : phase === 'decision' ? (
          <div className="mx-auto max-w-4xl border border-white/10 bg-[#191C15] p-5 sm:p-8">
            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B5F33B]/30 bg-[#B5F33B]/10">
                <ShieldCheck size={25} className="text-[#B5F33B]" />
              </div>

              <div>
                <h2 className="text-lg font-black uppercase">
                  Qual é a sua decisão?
                </h2>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Você analisou as informações disponíveis. Agora escolha como responder à proposta.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {missionChoices.map((item) => {
                const isSelected = selectedChoice === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedChoice(item.id)}
                    aria-pressed={isSelected}
                    className={`w-full border p-5 text-left transition ${
                      isSelected
                        ? 'border-[#B5F33B] bg-[#B5F33B]/10'
                        : 'border-white/10 bg-[#12140F] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center border ${
                          isSelected
                            ? 'border-[#B5F33B] bg-[#B5F33B] text-[#12140F]'
                            : 'border-white/20 text-transparent'
                        }`}
                      >
                        <Check size={14} />
                      </div>

                      <div>
                        <h3 className="text-sm font-black uppercase">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-white/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {choice && (
              <div className="mt-5 border-l-2 border-[#B5F33B] bg-[#B5F33B]/5 p-4">
                <p className="text-xs font-black uppercase text-[#B5F33B]">
                  Escolha selecionada
                </p>

                <p className="mt-2 text-xs leading-6 text-white/60">
                  {choice.description}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setPhase('investigation')
                  setActiveTab('evidence')
                }}
                className="flex min-h-12 items-center justify-center gap-2 border border-white/15 px-5 text-xs font-bold uppercase tracking-widest text-white/60 transition hover:border-white/40 hover:text-white"
              >
                <ArrowLeft size={16} />
                Revisar investigação
              </button>

              <button
                type="button"
                onClick={finishMission}
                disabled={!selectedChoice}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#B5F33B] px-5 text-xs font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69] disabled:cursor-not-allowed disabled:opacity-30"
              >
                Confirmar decisão
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl border border-white/10 bg-[#191C15] p-6 text-center sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#B5F33B]/30 bg-[#B5F33B]/10">
              <ShieldCheck size={34} className="text-[#B5F33B]" />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B5F33B]">
              Relatório da missão
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
              {finalScore >= 4
                ? 'Boa investigação!'
                : finalScore >= 2
                  ? 'Missão concluída.'
                  : 'Aprendizado registrado.'}
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/50">
              {playerName}, revise o resultado e veja o que aprendeu nesta investigação.
            </p>

            <div className="mt-8 border border-white/10 bg-[#12140F] p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Pontuação
              </p>

              <p className="mt-2 text-6xl font-black text-[#B5F33B]">
                {finalScore}
                <span className="text-2xl text-white/30">/5</span>
              </p>

              <div className="mt-5 h-2 overflow-hidden bg-white/10">
                <div
                  className="h-full bg-[#B5F33B]"
                  style={{ width: `${(finalScore / 5) * 100}%` }}
                />
              </div>

              <div className="mt-6 border-t border-white/10 pt-5 text-left">
                <p className="text-xs font-black uppercase text-[#B5F33B]">
                  Feedback da decisão
                </p>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {choice?.feedback}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5 text-left">
                <p className="text-xs font-black uppercase">
                  Resultado da análise
                </p>

                <p className="mt-2 text-xs leading-6 text-white/50">
                  Você identificou {correctCount} dos {correctEvidence.length} sinais de alerta.
                  {falsePositiveCount > 0
                    ? ` Também selecionou ${falsePositiveCount} elemento(s) que não são sinais de alerta por si só.`
                    : ''}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={restartMission}
                className="flex min-h-12 items-center justify-center gap-2 border border-white/15 px-5 text-xs font-bold uppercase tracking-widest text-white/60 transition hover:border-white/40 hover:text-white"
              >
                <RotateCcw size={16} />
                Jogar novamente
              </button>

              <button
                type="button"
                onClick={onHome}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#B5F33B] px-5 text-xs font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69]"
              >
                Voltar ao início
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[9px] font-bold uppercase tracking-widest text-white/25">
          <span>HANDS OF JUSTICE</span>

          <span>
            Etapa{' '}
            {phase === 'investigation'
              ? '01/03'
              : phase === 'decision'
                ? '02/03'
                : '03/03'}
          </span>
        </div>
      </div>
    </section>
  )
}
