import { Component } from '@angular/core';

type ContactType = 'phone' | 'whatsapp' | 'email' | 'facebook' | 'linkedin'
type JobType = 'clt' | 'pj'

class ExperienceModel {
  public constructor(
    public job_type: JobType = 'clt',
    public job_name: string = '',
    public employee_name: string = '',
    public address: string = '',
    public date_begin: string = '',
    public date_end: string = 'present'
  ) { }
}

class FormationModel {
  public constructor(
    public class_name: string = '',
    public school_name: string = '',
    public address: string = '',
    public date_begin: string = '',
    public date_end: string = 'present'
  ) { }
}

class ContactModel {
  public constructor(
    public type: ContactType = 'phone',
    public value: string = ''
  ) { }
}

class FormModel {
  public constructor(
    public name: string = '',
    public address: string = '',
    public birthday: string = '',
    public contact_list: ContactModel[] = [new ContactModel('phone')],
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
    { key: 'single', value: 'Solteiro' },
  ]

  public addExperience (): boolean {
    this.form.experience_list.push(new ExperienceModel())
    return false
  }

  public addFormation (): boolean {
    this.form.formation_list.push(new FormationModel())
    return false
  }

  public addContact (): boolean {
    this.form.contact_list.push(new ContactModel('phone'))
    return false
  }

  public downloadPDF(): void {
  }
}
