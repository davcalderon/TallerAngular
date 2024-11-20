import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaComponent } from './conferencia.component';
import { DetalleComponent } from '../detalle/detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciaComponent],
  exports: [ConferenciaComponent, DetalleComponent]
})
export class ConferenciaModule { }
