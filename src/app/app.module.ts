import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoService } from './service/photo.service';
import { ComponentModule } from './component/component.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PhotoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
