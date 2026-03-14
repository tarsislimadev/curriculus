import { HTML } from 'afrontend'

export class TextElement extends HTML {
  constructor({ text = '' } = {}) {
    super()
    this.setText(text)
  }
}
