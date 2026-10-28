import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Search,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'

interface MissionBriefingPageProps {
  playerName: string
  onBack: () => void
  onHome: () => void
  onStart: () => void
}

export default function MissionBriefingPage({
  playerName,
  onBack,
  onHome,
  onStart,
}: MissionBriefingPageProps) {
  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#B5F33B 1px, transparent 1px), linear-gradient(90deg, #B5F33B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition hover:text-[#B5F33B]"
        >
          <ArrowLeft size={16} />
          Voltar à história
        </button>

        <div className="mt-10 border border-[#B5F33B]/30 bg-[#191C15] p-6 sm:mt-14 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center bg-[#B5F33B] text-[#12140F]">
              <ShieldAlert size={25} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B5F33B]">
                Central de operações
              </p>

              <p className="mt-1 text-xs text-white/40">
                Agente: {playerName}
              </p>
            </div>
          </div>

          <div className="mt-9 border-y border-white/10 py-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Missão 01
            </p>

            <h1 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-6xl">
              A PROPOSTA
              <br />
              <span className="text-[#B5F33B]">
                SUSPEITA.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Você recebeu uma oferta de trabalho pela internet.
              Antes de responder, precisa analisar a mensagem,
              identificar possíveis sinais de risco e descobrir
              quais atitudes podem ajudar a proteger você.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-black uppercase tracking-widest">
              Objetivos da missão
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <article className="border border-white/10 bg-[#12140F] p-5">
                <Search
                  size={24}
                  className="text-[#B5F33B]"
                />

                <h3 className="mt-4 text-sm font-black uppercase">
                  Investigar
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  Observe a mensagem e procure informações
                  que mereçam atenção.
                </p>
              </article>

              <article className="border border-white/10 bg-[#12140F] p-5">
                <Eye
                  size={24}
                  className="text-[#B5F33B]"
                />

                <h3 className="mt-4 text-sm font-black uppercase">
                  Identificar
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  Reconheça pressão, pedidos de segredo e
                  informações insuficientes.
                </p>
              </article>

              <article className="border border-white/10 bg-[#12140F] p-5">
                <ShieldCheck
                  size={24}
                  className="text-[#B5F33B]"
                />

                <h3 className="mt-4 text-sm font-black uppercase">
                  Proteger
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  Escolha atitudes prudentes e procure
                  fontes confiáveis para verificar a oferta.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-8 border-l-2 border-[#B5F33B] bg-[#B5F33B]/5 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-[#B5F33B]">
              Lembre-se
            </p>

            <p className="mt-2 text-sm leading-7 text-white/60">
              Não forneça dados pessoais, não envie dinheiro
              e não aceite pressão para tomar decisões.
              Verifique as informações e converse com alguém
              de confiança quando necessário.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onHome}
              className="flex min-h-12 items-center justify-center border border-white/15 px-6 text-xs font-bold uppercase tracking-widest text-white/60 transition hover:border-white/40 hover:text-white"
            >
              Voltar ao início
            </button>

            <button
  type="button"
  onClick={onStart}
  className="flex min-h-12 flex-1 items-center justify-center gap-3 bg-[#B5F33B] px-6 text-xs font-black uppercase tracking-widest text-[#12140F] transition hover:bg-[#C9FF69]"
>
  Iniciar investigação
  <ArrowRight size={17} />
</button>
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-widest text-white/25">
          HANDS OF JUSTICE · MISSÃO 01
        </p>
      </div>
    </section>
  )
}