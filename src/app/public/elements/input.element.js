import { HTML } from 'afrontend'

export class InputElement extends HTML {
  constructor(type = 'text', { attrs = {} } = {}) {
    super()
    attrs = { type, ...attrs }
    Object.keys(attrs).map((k) => this.setAttr(k, attrs[k]))
  }

  getTagName() { return 'input' }

  getValue() { return this.element.value }

  setValue(value) { this.element.value = value }
}
