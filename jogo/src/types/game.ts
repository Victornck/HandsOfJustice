export type Screen =
  | 'home'
  | 'characters'
  | 'story'
  | 'briefing'
  | 'mission'

export interface Avatar {
  id: number
  name: string
  skin: string
  hair: string
  hairDetail: string
  shirt: string
  accent: string
  pants: string
  description: string
}

export interface Player {
  name: string
  avatar: Avatar
}

export interface StoryDialogue {
  speaker: string
  text: string
  label: string
}