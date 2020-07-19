import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../dynamic-form.model';

@Component({
  selector: 'form-input',
  template: `
    <div 
      class="form-group" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        class="form-control"
        type="text"
        [formControlName]="config.name" />
    </div>
  `,
})
export class FormInputComponent {
  config: Field;
  group: FormGroup;
}