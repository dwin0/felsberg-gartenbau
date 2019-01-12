const ENTER = 13
const SPACEBAR = 32

export const isValidEvent = event =>
  event.which === ENTER || event.which === SPACEBAR || event.clientX
