import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromAmiibo from './amiibo.reducer';
import { Amiibo } from './amiibo.model';

export const key = 'amiibo'

export const getState = createFeatureSelector<fromAmiibo.AmiiboState>('amiibo')

export const getAmiiboState = createSelector(
  getState,
  (state: fromAmiibo.AmiiboState) => state.amiibo
)
