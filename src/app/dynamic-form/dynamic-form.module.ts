import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormPage } from './dynamic-form.page';
import { FormInputComponent } from './fields/form-input.component';
import { FormButtonComponent } from './fields/form-button.component';
import { DynamicFieldDirective } from './fields/dynamic-field.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects, dynamicFormFeatureKey } from './store';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormPage,
    FormInputComponent,
    FormButtonComponent,
    DynamicFieldDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(dynamicFormFeatureKey, reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [DynamicFormComponent, DynamicFormPage],
  entryComponents: [FormInputComponent, FormButtonComponent],
})
export class DynamicFormModule {}
