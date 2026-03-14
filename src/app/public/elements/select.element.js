import { HTML } from 'afrontend'

export class OptionElement extends HTML {
  getTagName() { return 'option' }
  setKey(value) { this.setAttr('value', value) }
  setValue(value) { this.setText(value) }
}

export class SelectElement extends HTML {
  constructor({ options = [], attrs = {}, }) {
    super()
    Object.keys(attrs).map((k) => this.setAttr(k, attrs[k]))
    Array.from(options).map(([name, value]) => this.addOption(name, value))
  }

  getTagName() { return 'select' }

  addOption(name, value) {
    const opt = new OptionElement()
    opt.setKey(name)
    opt.setValue(value)
    this.append(opt)
  }

  getValue() { return this.element.value }

  setValue(value) { this.element.value = value }
}
