import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromFields from './dynamic-form.reducer';

export const dynamicFormFeatureKey = 'dynamicForm';
export const formKey = 'forms';

export interface DynamicFormState {
  [formKey]: fromFields.FieldState;
}

export const reducers: ActionReducerMap<DynamicFormState> = {
  [formKey]: fromFields.reducer,
};

export const getDynamicFormState = createFeatureSelector<DynamicFormState>(
  dynamicFormFeatureKey
);
