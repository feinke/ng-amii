import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DialogDirective } from './dialog.directive';

declare var $:any;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('.modal').modal('show');
  }

  ngOnDestroy(): void {
  
  }

}
