import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AmiiboReturn, Amiibo } from './amiibo.model';
import { Store, select } from '@ngrx/store';
import { AmiiboActionTypes } from './amiibo.actions';
import { DialogDirective } from '../dialog/dialog.directive';
import * as fromStore from './amiibo.reducer';
import { getAmiiboState } from './amiibo.selector';
import { Observable } from 'rxjs';

type AmiiboStore = { amiibo: AmiiboReturn }

@Component({
  selector: 'app-amiibo',
  templateUrl: './amiibo.component.html',
  styleUrls: ['./amiibo.component.scss']
})
export class AmiiboComponent implements OnInit, AfterViewInit {
  @ViewChild(DialogDirective, { static: false }) appDialog: DialogDirective;

  amiibos$: Observable<Amiibo[]>;

  constructor(
    private store: Store,
  ) {
    this.amiibos$ = this.store.select(getAmiiboState)
  }

  ngOnInit(): void {
    this.store.dispatch({ type: AmiiboActionTypes.LoadAmiibo });
  }

  ngAfterViewInit(): void {
    // console.log(this.appDialog)
  }

  onAmiiboClick(amiibo: Amiibo) {
    //call service
    this.store.dispatch({ type: AmiiboActionTypes.ViewAmiibo, payload: amiibo });
  }
}
