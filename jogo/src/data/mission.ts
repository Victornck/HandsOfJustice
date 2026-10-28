export interface Evidence {
  id: string
  title: string
  description: string
  isWarning: boolean
  explanation: string
}

export interface MissionChoice {
  id: string
  title: string
  description: string
  feedback: string
  isSafe: boolean
}

export const missionEvidence: Evidence[] = [
  {
    id: 'urgency',
    title: 'Pressão para decidir',
    description:
      '"Preciso que você aceite ainda hoje."',
    isWarning: true,
    explanation:
      'A pressão para decidir rapidamente pode impedir que você verifique as informações. Uma oportunidade legítima deve permitir tempo para análise.',
  },
  {
    id: 'secrecy',
    title: 'Pedido de segredo',
    description:
      '"Não conte a ninguém por enquanto."',
    isWarning: true,
    explanation:
      'Pedir segredo sobre uma proposta importante pode ser uma tentativa de afastar você de pessoas que poderiam ajudar a avaliar os riscos.',
  },
  {
    id: 'unclear',
    title: 'Falta de informações',
    description:
      '"Depois explico todos os detalhes."',
    isWarning: true,
    explanation:
      'Uma proposta sem informações claras sobre a empresa, as atividades, as condições e os responsáveis precisa ser verificada antes de qualquer compromisso.',
  },
  {
    id: 'greeting',
    title: 'Mensagem de cumprimento',
    description:
      '"Olá! Tudo bem com você?"',
    isWarning: false,
    explanation:
      'Uma saudação comum, por si só, não é um sinal de perigo. É importante avaliar o contexto completo e não tirar conclusões precipitadas.',
  },
]

export const missionChoices: MissionChoice[] = [
  {
    id: 'accept',
    title: 'Aceitar imediatamente',
    description:
      'Aceitar a proposta sem verificar os detalhes.',
    feedback:
      'Essa opção não é recomendada. Você ainda não conhece as condições da proposta e está sendo pressionado a decidir. Pare e verifique as informações antes de assumir qualquer compromisso.',
    isSafe: false,
  },
  {
    id: 'investigate',
    title: 'Verificar antes de decidir',
    description:
      'Pesquisar a empresa por fontes independentes, pedir informações completas e conversar com alguém de confiança.',
    feedback:
      'Boa escolha! Verificar a empresa por canais independentes, entender as condições e buscar uma segunda opinião ajuda a tomar uma decisão mais informada.',
    isSafe: true,
  },
  {
    id: 'send',
    title: 'Enviar documentos pessoais',
    description:
      'Enviar documentos e dados pessoais para demonstrar interesse na oportunidade.',
    feedback:
      'Essa opção é arriscada. Não envie documentos, dados bancários ou informações sensíveis antes de verificar a legitimidade da proposta e a necessidade real desses dados.',
    isSafe: false,
  },
]