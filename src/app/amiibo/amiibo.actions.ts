import { createAction, props } from '@ngrx/store';
import { AmiiboReturn, Amiibo } from './amiibo.model';

export enum AmiiboActionTypes {
  LoadAmiibo = '[Amiibo] Load',
  LoadAmiiboSuccess = '[Amiibo] Load Success',
  LoadAmiiboFail = '[Amiibo] Load Fail',
  ViewAmiibo = '[Amiibo] View Amiibo'
}

export const getAmiibo = createAction(
  AmiiboActionTypes.LoadAmiibo
);

export const getAmiiboSuccess = createAction(
  AmiiboActionTypes.LoadAmiiboSuccess,
  props<{payload: AmiiboReturn}>()
)

export const viewAmiibo = createAction(
  AmiiboActionTypes.ViewAmiibo,
  props<{payload: Amiibo}>()
)