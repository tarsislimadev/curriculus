import { HTML } from 'afrontend'

export class ButtonElement extends HTML {
  constructor({ text = 'click', on_click } = {}) {
    super()
    if (typeof on_click == 'function') { this.addEventListener('click', () => on_click()) }
    this.setText(text)
  }

  getTagName() { return 'button' }
}
