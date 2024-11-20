import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia/Conferencia';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  Conferencia: Conferencia = Conferencia;
  constructor() { }
  getConferencia() {
    return Conferencia;
  }
  ngOnInit() {
    this.Conferencia = this.getConferencia();
  }

}
