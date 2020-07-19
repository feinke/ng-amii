import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-form-page',
  template:`
  <div>
    this is the page
    <app-dynamic-form></app-dynamic-form>
  </div>
`
})
export class DynamicFormPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
