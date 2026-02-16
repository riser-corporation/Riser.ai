export interface Message { role: 'user' | 'riser'; text: string; timestamp: number; }
export interface Action { name: string; args: any; id: string; }
export enum AppState { OFFLINE = 'OFFLINE', IDLE = 'IDLE', LISTENING = 'LISTENING', THINKING = 'THINKING', SPEAKING = 'SPEAKING' }