import { createAction, props } from '@ngrx/store';
import { Field } from '../../dynamic-form.model';
export enum DynamicFormActionTypes {
  LoadFields = '[DynamicForm] Load Fields',
  LoadFieldsSuccess = '[DynamicForm] Load Fields Success',
  LoadFieldFail = '[DynamicForm] Load Fields Fail',
}

export const loadFields = createAction(DynamicFormActionTypes.LoadFields);

export const loadFieldsSucess = createAction(
  DynamicFormActionTypes.LoadFieldsSuccess,
  props<{ payload: Field[] }>()
);
