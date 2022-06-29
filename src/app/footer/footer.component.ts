import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    {
      url: '#',
      name: 'Idioma'
    },
    {
      url: '#',
      name: 'Dispositivos compatíveis'
    },
    {
      url: '#',
      name: 'Contrato de assinatura'
    },
    {
      url: '#',
      name: 'Politica de privacidade'
    },
    {
      url: '#',
      name: 'Proteção de dados no Brasil'
    },
    {
      url: '#',
      name: 'Anuncios personalizados'
    },
    {
      url: '#',
      name: 'Ajuda'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
