import { createReducer, on, Action } from "@ngrx/store";
import { getAmiibo, getAmiiboSuccess, viewAmiibo } from "./amiibo.actions";
import { Amiibo } from "./amiibo.model";

export interface AmiiboState {
  amiibo: Amiibo[],
  selectedAmiibo: Amiibo,
  status: string
}

export const initialState: AmiiboState = {
  amiibo: null,
  selectedAmiibo: null,
  status: ''
}

const amiiboReducer = createReducer(
  initialState,
  on(getAmiibo, state => ({ ...state })),
  on(getAmiiboSuccess, (state, { payload }) => ({ ...state, amiibo: payload.amiibo.slice(0, 10) })),
  on(viewAmiibo, (state, { payload }) => ({ ...state, selectedAmiibo: payload }))
);

export function reducer(state: AmiiboState | undefined, action: Action) {
  return amiiboReducer(state, action)
}

export const getAllAmiibo = (state: AmiiboState) => state.amiibo