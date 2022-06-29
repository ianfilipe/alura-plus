import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() heroImage: string = ''
  @Input() heroImageAlt: string = ''
  @Input() heroTitle: string = ''
  @Input() heroSubtitle: string = ''

  // section = {
  //   image: 'assets/images/Plataformas.png',
  //   alt: 'Um monitor e um celular com o Alura Plus aberto',
  //   title: 'Assista do seu jeito',
  //   subtitle: 'Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de cursos não para de crescer.'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
