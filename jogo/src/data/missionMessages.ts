export interface MissionMessage {
  id: string
  time: string
  sender: 'contact' | 'player'
  text: string
  warning?: boolean
  warningTitle?: string
  explanation?: string
}

export const missionMessages: MissionMessage[] = [
  {
    id: 'message-1',
    time: '09:12',
    sender: 'contact',
    text: 'Olá! Tenho uma oportunidade de trabalho incrível para você.',
  },
  {
    id: 'message-2',
    time: '09:14',
    sender: 'player',
    text: 'Olá! Que tipo de trabalho é? Poderia explicar melhor as condições?',
  },
  {
    id: 'message-3',
    time: '09:16',
    sender: 'contact',
    text: 'É uma oportunidade com ótima remuneração. Você vai gostar bastante!',
  },
  {
    id: 'message-4',
    time: '09:18',
    sender: 'player',
    text: 'Qual é o nome da empresa? Existem informações sobre as atividades e o contrato?',
  },
  {
    id: 'message-5',
    time: '09:19',
    sender: 'contact',
    text: 'Preciso que você aceite ainda hoje. Não podemos perder essa oportunidade.',
    warning: true,
    warningTitle: 'Pressão para decidir',
    explanation:
      'A urgência pode dificultar a análise da proposta. Antes de aceitar, procure informações independentes e solicite tempo para verificar as condições.',
  },
  {
    id: 'message-6',
    time: '09:20',
    sender: 'contact',
    text: 'Não conte a ninguém por enquanto. Depois explico todos os detalhes.',
    warning: true,
    warningTitle: 'Segredo e falta de informações',
    explanation:
      'Pedir segredo e adiar informações importantes são sinais de alerta. Converse com alguém de confiança e não assuma compromissos antes de verificar a proposta.',
  },
  {
    id: 'message-7',
    time: '09:22',
    sender: 'contact',
    text: 'Para garantir sua vaga, envie uma foto dos seus documentos agora.',
    warning: true,
    warningTitle: 'Pedido antecipado de documentos',
    explanation:
      'Evite compartilhar documentos ou dados sensíveis antes de verificar a identidade do responsável, a legitimidade da empresa e a necessidade real dessas informações.',
  },
  {
    id: 'message-8',
    time: '09:24',
    sender: 'contact',
    text: 'Se você realmente quer essa oportunidade, precisa confiar em mim e responder agora.',
    warning: true,
    warningTitle: 'Pressão emocional',
    explanation:
      'Tentar obter confiança sem apresentar informações verificáveis pode pressionar você a agir sem avaliar os riscos. Você pode interromper a conversa e procurar orientação.',
  },
]