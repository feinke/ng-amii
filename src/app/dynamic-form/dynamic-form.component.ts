import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Field } from './dynamic-form.model';
import { DynamicFormService } from './dynamic-form.service';
import { Store } from '@ngrx/store';
import { DynamicFormActionTypes } from './store/actions';
import { getFieldsState } from './store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  styleUrls: ['./dynamic-form.component.scss'],
  template: `
    <form class="dynamic-form" [formGroup]="form">
      <ng-container *ngIf="fields$ | async as fields">
        <ng-template
          *ngFor="let field of fields"
          dynamicField
          [config]="field"
          [form]="form"
        ></ng-template>
      </ng-container>
    </form>
    <pre>
    {{ form.value | json }}
  </pre
    >
    <pre>
    {{ fields$ | async | json }}
  </pre
    >
  `,
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  fields$: Observable<Field[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.fields$ = this.store.select(getFieldsState);
  }

  ngOnInit(): void {
    this.store.dispatch({ type: DynamicFormActionTypes.LoadFields });

    this.createFormFromObservable();
  }

  createForm(fields: Field[]) {
    const group = this.fb.group({});
    fields.forEach((field) => {
      group.addControl(field.name, this.fb.control({ value: '' }));
    });
    return group;
  }

  createFormFromObservable() {
    this.fields$.subscribe((fields) => {
      this.form = this.createForm(fields);
    });
  }
}
