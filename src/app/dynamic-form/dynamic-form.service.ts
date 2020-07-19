import { Injectable } from '@angular/core';
import { Field } from './dynamic-form.model';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  getFieldsMock() {
    const fields:Field[] = [
      {
        type: 'input',
        label: 'Full name',
        name: 'name',
      },
      {
        type: 'button',
        label: 'Submit',
        name: 'submit'
      }
    ];

    return fields;
  }

  getFieldsMockObservable(): Observable<Field[]> {
    return of(this.getFieldsMock());
  }
}
