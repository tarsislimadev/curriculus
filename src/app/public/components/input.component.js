import { Component } from './component.js'
import { TextElement } from '../elements/text.element.js'
import { InputElement } from '../elements/input.element.js'
import { ErrorElement } from '../elements/error.element.js'

export class InputComponent extends Component {
  label = new TextElement({})
  input = new InputElement({})
  error = new ErrorElement({})

  constructor({ label = '' } = {}) {
    super()
    this.label.setText(label)
  }

  onCreate() {
    this.append(this.getLabel())
    this.append(this.getInput())
    this.append(this.getError())
  }

  getLabel() { return this.label }
  getInput() { return this.input }
  getError() { return this.error }
  getValue() { return this.input.getValue() }
  setValue(value) { this.input.setValue(value) }
}
