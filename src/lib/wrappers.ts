import modes from '../modes/modes.json'

export const mode = (rawMode: string) => rawMode as keyof typeof modes