import { matchMediaMock } from 'uranium'

// Polyfill matchMedia for exponent
if (global.__exponent && !global.matchMedia) global.matchMedia = matchMediaMock

export * from './style'
export * from './theme'
export * from './components'
