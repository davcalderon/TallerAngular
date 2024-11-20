import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferenciaModule } from './conferencia/conferencia.module';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [	
    AppComponent,
      DetalleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConferenciaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
