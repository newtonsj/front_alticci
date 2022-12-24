import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlticciComponent } from './alticci/alticci.component';
import { AlticciService } from './alticci.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlticciComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [HttpClientModule, AlticciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
