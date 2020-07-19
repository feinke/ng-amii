import { Injectable } from '@angular/core';
import { AmiiboService } from './amiibo.service';
import { AmiiboActionTypes } from './amiibo.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, take, catchError } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs';
import { AmiiboReturn } from './amiibo.model';

@Injectable()
export class AmiiboEffects {
  constructor(
    private actions$: Actions,
    private amiiboService: AmiiboService) { }

  loadAmiibo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AmiiboActionTypes.LoadAmiibo),
      mergeMap(() => this.amiiboService.getAll()
        .pipe(
          map((body: AmiiboReturn) => ({ type: AmiiboActionTypes.LoadAmiiboSuccess, payload: body })),
          catchError(() => of({type: AmiiboActionTypes.LoadAmiiboFail}))
        )
      )
    )
  )
}
