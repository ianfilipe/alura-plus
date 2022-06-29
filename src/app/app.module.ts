import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { CombosComponent } from './combos/combos.component';
import { DownloadComponent } from './download/download.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PlatformsComponent,
    CombosComponent,
    DownloadComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
