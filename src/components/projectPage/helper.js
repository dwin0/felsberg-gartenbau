const ENTER = 13
const SPACEBAR = 32
const ESCAPE = 27

export const isGalleryOpenEvent = (event) =>
  event.which === ENTER || event.which === SPACEBAR || event.clientX

export const isGalleryCloseEvent = (event) => event.which === ESCAPE
