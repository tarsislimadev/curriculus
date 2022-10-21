import { Component } from '@angular/core';

type ContactType = 'phone' | 'whatsapp' | 'email' | 'facebook' | 'linkedin'
type JobType = 'clt' | 'pj'

class ExperienceModel {
  public constructor(
    public job_type: JobType = 'clt',
    public job_name: string = '',
    public employee_name: string = '',
    public address: CityModel = new CityModel(),
    public date_begin: DateFieldModel = new DateFieldModel(),
    public date_end: DateFieldModel = new DateFieldModel()
  ) { }
}

class FormationModel {
  public constructor(
    public type: string = 'n1',
    public class_name: string = '',
    public school_name: string = '',
    public address: CityModel = new CityModel(),
    public date_begin: DateFieldModel = new DateFieldModel(),
    public date_end: DateFieldModel = new DateFieldModel()
  ) { }
}

class ContactModel {
  public constructor(
    public type: ContactType = 'phone',
    public value: string = ''
  ) { }
}

class CityModel {
  public constructor(
    public city: string = '',
    public state: string = 'SP'
  ) { }
}

class NeighboorModel extends CityModel {
  public constructor(
    public neighboor: string = '',
    public city: string = '',
    public state: string = 'SP'
  ) {
    super(city, state)
  }
}

class DateFieldModel {

  public value: string = ''

  public constructor(
    public date: string = '',
    public month: string = '',
    public year: string = ''
  ) {
  }
}

class FormModel {
  public constructor(
    public name: string = '',
    public address: NeighboorModel = new NeighboorModel(),
    public birthday: DateFieldModel = new DateFieldModel(),
    public marital_status: string = 'single',
    public children_number: string = '',
    public contact_list: ContactModel[] = [new ContactModel('email'), new ContactModel('phone')],
    public experience_list: ExperienceModel[] = [new ExperienceModel()],
    public formation_list: FormationModel[] = [new FormationModel()]
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public form: FormModel = new FormModel();

  public formation_types: any[] = [
    { key: 'n1', value: 'Bacharelado' },
    { key: 'n2', value: 'Licenciatura' },
    { key: 'n3', value: 'Mestrado' },
    { key: 'n4', value: 'Doutorado' },
    { key: 'n5', value: 'Especialização' },
    { key: 'n6', value: 'Curso técnico' },
  ]

  public job_types: any[] = [
    { key: 'clt', value: 'CLT' },
    { key: 'pj', value: 'PJ' }
  ]

  public contact_types: any[] = [
    { key: 'phone', value: 'Telefone' },
    { key: 'whatsapp', value: 'WhatsApp' },
    { key: 'email', value: 'E-mail' },
    { key: 'facebook', value: 'Facebook' },
    { key: 'linkedin', value: 'Linkedin' },
  ]

  public personal_status_types: any[] = [
    { key: 'single', value: 'Solteiro(a)' },
    { key: 'maried', value: 'Casado(a)' },
    { key: 'separated', value: 'Divorciado(a)' },
    { key: 'union', value: 'União estável' },
    { key: 'other', value: 'Outro' }
  ]

  public states: any[] = [
    { key: 'SP', value: 'São Paulo' },
  ]

  public addExperience(): boolean {
    this.form.experience_list.push(new ExperienceModel())
    return false
  }

  public addFormation(): boolean {
    this.form.formation_list.push(new FormationModel())
    return false
  }

  public addContact(): boolean {
    this.form.contact_list.push(new ContactModel('phone'))
    return false
  }

  public downloadPDF(): void {
  }
}
