import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  public deleteHero?: string;

  removeLastHero(): void {
    const deleteHero = this.heroNames.pop();
    this.deleteHero = deleteHero || '';
    console.log({ deleteHero });
  }
}
