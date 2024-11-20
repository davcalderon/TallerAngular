import { Component, OnInit } from '@angular/core';
import { Conferencia } from './Conferencia';
import { ConferenciaService } from './conferencia.service';
import { dataConferencias } from './dataConferencias';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  constructor(private conferenciaService: ConferenciaService) { }
  conferencias: Array<Conferencia> =[];

  getConferenciaList(): Array<Conferencia> {
    return dataConferencias;
  }

  getConferencias() {
    this.conferenciaService.getConferencias().subscribe(conferencias => {
      this.conferencias = conferencias;
    });
  }
  
  fechaActual= new Date();
  // upcomingConferences(){
  //   conferencia = this.getConferencias()
  // }

  //console.log(fechaActual)
  // fechaStart = new Date(parts[0], parts[1] - 1, parts[2]); 
  // console.log(mydate.toDateString());

  ngOnInit() {
    this.getConferencias();
  }

}
