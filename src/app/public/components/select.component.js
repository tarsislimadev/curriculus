import { Component } from './component.js'
import { TextElement } from '../elements/text.element.js'
import { SelectElement } from '../elements/select.element.js'
import { ErrorElement } from '../elements/error.element.js'

export class SelectComponent extends Component {
  label = new TextElement({})
  select = new SelectElement({})
  error = new ErrorElement({})

  constructor({ label = '', options = [] } = {}) {
    super()
    this.label.setText(label)
    Array.from(options).map(([name, value]) => this.addOption(name, value))
  }

  onCreate() {
    this.append(this.getLabel())
    this.append(this.getSelect())
    this.append(this.getError())
  }

  getLabel() { return this.label }
  getSelect() { return this.select }
  getError() { return this.error }
  getValue() { return this.select.getValue() }
  setValue(value) { this.select.setValue(value) }
  addOption(name, value) { this.select.addOption(name, value) }
}
