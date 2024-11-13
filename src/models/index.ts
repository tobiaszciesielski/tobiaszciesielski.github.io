interface PublicSpeech {
  language: 'PL' | 'EN'
  topic: string
  image: string
  recording?: string
  slides?: string
  event: string
  date: Date
  place: string
}
