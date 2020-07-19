import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DynamicFormService } from '../../dynamic-form.service';
import { DynamicFormActionTypes } from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { pipe, of, EMPTY } from 'rxjs';

@Injectable()
export class DynamicFormEffects {
  constructor(
    private actions$: Actions,
    private dfService: DynamicFormService
  ) {}

  loadFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DynamicFormActionTypes.LoadFields),
      mergeMap(() =>
        this.dfService.getFieldsMockObservable().pipe(
          map((field) => ({
            type: DynamicFormActionTypes.LoadFieldsSuccess,
            payload: field,
          })),
          catchError(() => of({ type: DynamicFormActionTypes.LoadFieldFail }))
        )
      )
    )
  );
}
