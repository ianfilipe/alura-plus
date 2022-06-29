import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices = [
    {
      image: ('assets/images/tv.png'),
      name: 'TV',
      imageAlt: 'Ícone de televisão'
    },
    {
      image: ('assets/images/computador.png'),
      name: 'Computadores',
      imageAlt: 'Ícone de computador'
    },
    {
      image: ('assets/images/celular.png'),
      name: 'Celulares e tablets',
      imageAlt: 'Ícone de celular'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
