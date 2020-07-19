import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromDynamicForm from '../reducers';
import * as fromFields from '../reducers/dynamic-form.reducer';

export const getFormState = createSelector(
  fromDynamicForm.getDynamicFormState,
  (state: fromDynamicForm.DynamicFormState) =>
    state[fromDynamicForm.formKey]
);

export const getFieldsState = createSelector(
  getFormState,
  fromFields.getFields
)