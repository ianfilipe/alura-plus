import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alura Plus';

  section = [
    {
      heroImage: 'assets/images/Plataformas.png',
      heroImageAlt: 'Um monitor e um celular com o Alura Plus aberto',
      heroTitle: 'Assista do seu jeito',
      heroSubtitle: 'Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de cursos não para de crescer.'
    },
    {
      heroImage: 'assets/images/Notebook.png',
      heroImageAlt: 'Um Notebook com o site da Alura aberto',
      heroTitle: 'Baixe seus cursos',
      heroSubtitle: 'Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.'
    }
  ]

}
