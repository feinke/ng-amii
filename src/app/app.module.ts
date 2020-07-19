import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmiiboModule } from './amiibo/amiibo.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAmiibo from './amiibo/amiibo.reducer';
import { AmiiboService } from './amiibo/amiibo.service';
import { AmiiboEffects } from './amiibo/amiibo.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { DialogDirective } from './dialog/dialog.directive';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { DynamicFormService } from './dynamic-form/dynamic-form.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AmiiboModule,
    DynamicFormModule,
    StoreModule.forRoot({ amiibo: fromAmiibo.reducer }),
    EffectsModule.forRoot([AmiiboEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  entryComponents: [DialogComponent],
  providers: [AmiiboService, DialogService, DynamicFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
