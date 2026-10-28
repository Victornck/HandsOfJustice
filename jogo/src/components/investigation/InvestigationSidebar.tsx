import {
  FileSearch,
  MessageSquare,
  UserRound,
  ShieldCheck,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'

export type InvestigationTab =
  | 'messages'
  | 'profile'
  | 'evidence'

interface InvestigationSidebarProps {
  activeTab: InvestigationTab
  onTabChange: (tab: InvestigationTab) => void
  evidenceCount: number
}

interface MenuItem {
  id: InvestigationTab
  label: string
  description: string
  icon: LucideIcon
}

const menuItems: MenuItem[] = [
  {
    id: 'messages',
    label: 'Mensagens',
    description: 'Histórico da conversa',
    icon: MessageSquare,
  },
  {
    id: 'profile',
    label: 'Perfil investigado',
    description: 'Informações do contato',
    icon: UserRound,
  },
  {
    id: 'evidence',
    label: 'Evidências',
    description: 'Análise de indícios',
    icon: FileSearch,
  },
]

export default function InvestigationSidebar({
  activeTab,
  onTabChange,
  evidenceCount,
}: InvestigationSidebarProps) {
  return (
    <aside className="border-b border-white/[0.08] bg-[#151810] lg:border-b-0 lg:border-r lg:border-white/[0.08]">
      {/* Cabeçalho */}
      <div className="border-b border-white/[0.07] px-4 py-4 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-[#B5F33B]" />

          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B5F33B]/70">
            Painel de controle
          </p>
        </div>

        <h3 className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-white">
          Investigação
        </h3>

        <p className="mt-1 text-[10px] leading-relaxed text-white/35">
          Analise as informações antes de tomar uma decisão.
        </p>
      </div>

      {/* Navegação */}
      <nav
        aria-label="Ferramentas de investigação"
        className="grid grid-cols-3 gap-1.5 p-2 sm:p-3 lg:grid-cols-1 lg:gap-2"
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex min-w-0 flex-col items-center gap-2 border p-2.5 text-center transition-all duration-200 sm:flex-row sm:gap-3 sm:p-3 sm:text-left ${
                isActive
                  ? 'border-[#B5F33B]/30 bg-[#B5F33B]/[0.08] shadow-[inset_0_0_20px_rgba(181,243,59,0.025)]'
                  : 'border-white/[0.04] bg-white/[0.015] hover:border-white/15 hover:bg-white/[0.04]'
              }`}
            >
              {isActive && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5F33B] sm:bottom-2 sm:right-auto sm:top-2 sm:h-auto sm:w-0.5"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute right-2 top-2 hidden text-[#B5F33B]/50 sm:block"
                  >
                    <ChevronRight size={12} />
                  </span>
                </>
              )}

              {/* Ícone */}
              <div
                className={`relative flex h-9 w-9 shrink-0 items-center justify-center transition-colors sm:h-10 sm:w-10 ${
                  isActive
                    ? 'bg-[#B5F33B] text-[#12140F]'
                    : 'border border-white/[0.07] bg-white/[0.035] text-white/45 group-hover:text-white/80'
                }`}
              >
                <Icon size={17} strokeWidth={1.8} />

                {item.id === 'evidence' && evidenceCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center border border-[#151810] bg-[#B5F33B] px-1 text-[8px] font-black text-[#12140F]">
                    {evidenceCount}
                  </span>
                )}
              </div>

              {/* Texto */}
              <div className="min-w-0 flex-1 sm:pr-3">
                <p
                  className={`text-[9px] font-black uppercase leading-tight tracking-wider sm:text-[10px] ${
                    isActive
                      ? 'text-[#B5F33B]'
                      : 'text-white/65 group-hover:text-white/90'
                  }`}
                >
                  {item.label}
                </p>

                <p className="mt-1 hidden truncate text-[9px] text-white/30 sm:block">
                  {item.description}
                </p>
              </div>

              <span className="sr-only">
                {`Ferramenta ${index + 1} de ${menuItems.length}`}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Orientação */}
      <div className="hidden border-t border-white/[0.07] p-4 lg:block">
        <div className="border border-white/[0.06] bg-black/15 p-3">
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={15}
              className="shrink-0 text-[#B5F33B]"
            />

            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/65">
              Diretriz da missão
            </p>
          </div>

          <p className="mt-3 text-[10px] leading-relaxed text-white/40">
            Examine as informações disponíveis, identifique sinais de alerta
            e verifique os dados antes de confiar em uma proposta.
          </p>

          <div className="mt-3 flex items-center gap-2 border-t border-white/[0.07] pt-3">
            <span className="h-1.5 w-1.5 bg-[#B5F33B]/70" />

            <span className="text-[8px] font-bold uppercase tracking-wider text-white/30">
              Prossiga com atenção
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}