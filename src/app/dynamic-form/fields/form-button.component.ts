import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../dynamic-form.model';

@Component({
  selector: 'form-input',
  template: `
    <div [formGroup]="group">
      <button class="btn btn-primary" type="submit">
        {{config.label}}
      </button>
    </div>
  `,
})
export class FormButtonComponent {
  config: Field;
  group: FormGroup;
}