import { HTML } from 'afrontend'
import { H1Element } from './elements/h1.element.js'
import { H3Element } from './elements/h3.element.js'
import { LineElement } from './elements/line.element.js'
import { ButtonElement } from './elements/button.element.js'
import { InputComponent } from './components/input.component.js'
import { SelectComponent } from './components/select.component.js'

import { getMaritalStatusList } from './utils/functions.js'

export class Page extends HTML {
  components = {
    name_input: new InputComponent({ label: 'Nome', placeholder: 'Jonas Silva' }),
    birthday_input: new InputComponent({ label: 'Data de nascimento', placeholder: '01/01/2001' }),
    marital_status: new SelectComponent({ label: 'Estado Cívil', options: getMaritalStatusList() }),
    generate_button: new ButtonElement({ text: 'generate', on_click: () => this.onGenerateButtonClick() })
  }

  onCreate() {
    this.append(new H1Element({ text: 'Curriculus' }))
    this.append(new LineElement())
    this.append(new H3Element({ text: 'Dados pessoais' }))
    this.append(this.getNameInputComponent())
    this.append(this.getBirthdayInputComponent())
    this.append(this.getMaritalStatusSelectComponent())
    this.append(this.getGenerateButtonComponent())
  }

  getNameInputComponent() { return this.components.name_input }

  getBirthdayInputComponent() { return this.components.birthday_input }

  getMaritalStatusSelectComponent() { return this.components.marital_status }

  getGenerateButtonComponent() { return this.components.generate_button }

  onGenerateButtonClick() { alert('generate') }
}
