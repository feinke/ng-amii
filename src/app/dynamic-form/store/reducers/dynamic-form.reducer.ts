import { Field } from '../../dynamic-form.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions';

export interface FieldState {
  fields: Field[];
}

export const initialState: FieldState = {
  fields: [],
};

const dynamicFormReducer = createReducer(
  initialState,
  on(fromActions.loadFields, (state) => ({ ...state })),
  on(fromActions.loadFieldsSucess, (state, { payload }) => {
    const fields = payload;
    return {
      ...state,
      fields,
    };
  })
);

export function reducer(state: FieldState | undefined, action: Action) {
  return dynamicFormReducer(state, action);
}

export const getFields = (state: FieldState) => state.fields;
