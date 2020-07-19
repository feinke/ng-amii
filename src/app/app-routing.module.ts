import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmiiboComponent } from './amiibo/amiibo.component';
import { DynamicFormPage } from "./dynamic-form/dynamic-form.page";

const routes: Routes = [
  {path: '',  component: AmiiboComponent },
  {path: 'form', component: DynamicFormPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
