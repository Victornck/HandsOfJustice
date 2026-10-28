import type { StoryDialogue } from '../types/game'

export const introductionStory: StoryDialogue[] = [
  {
    speaker: 'NARRADOR',
    label: 'CENA 01 — UMA NOITE COMUM',
    text: 'A noite parece tranquila. Você está em casa, navegando pela internet, quando uma notificação aparece na tela.',
  },
  {
    speaker: 'NARRADOR',
    label: 'CENA 02 — UMA NOVA OPORTUNIDADE',
    text: 'Uma pessoa que você conheceu recentemente envia uma proposta de trabalho. A promessa é de dinheiro rápido, poucas exigências e início imediato.',
  },
  {
    speaker: 'SISTEMA',
    label: 'NOTIFICAÇÃO RECEBIDA',
    text: 'Tenho uma oportunidade incrível para você! Preciso que aceite ainda hoje. Não conte a ninguém por enquanto. Depois explico todos os detalhes.',
  },
  {
    speaker: 'NARRADOR',
    label: 'CENA 03 — ALGO NÃO PARECE CERTO',
    text: 'Você relê a mensagem. A pressa para aceitar, o pedido de segredo e a falta de informações concretas despertam sua atenção.',
  },
  {
    speaker: 'NARRADOR',
    label: 'CENA 04 — SUA DECISÃO',
    text: 'Você não precisa decidir imediatamente. Investigar a proposta, verificar as informações e conversar com alguém de confiança pode ajudar a evitar uma situação perigosa.',
  },
  {
    speaker: 'SISTEMA',
    label: 'INTRODUÇÃO CONCLUÍDA',
    text: 'Sua primeira missão está pronta. Prepare-se para analisar as informações, identificar sinais de alerta e escolher como agir.',
  },
]