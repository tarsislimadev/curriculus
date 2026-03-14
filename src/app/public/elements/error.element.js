import { HTML } from 'afrontend'

export class ErrorElement extends HTML {
  onCreate() { this.setStyle('color', 'red') }
}
