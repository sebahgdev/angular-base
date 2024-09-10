import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 25;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 30;
  }
  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 25;
  /*  document.querySelectorAll('h1')!.forEach(element => {
    element.innerHTML = '<h1>Desde Angular</h1>';
   }) */
  }
}
