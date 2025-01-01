import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Iron man";
  public edad: number = 48;

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.edad}`;
  }

  changeHero():void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.edad = 22;
  }

  reset(): void {
    this.edad = 48;
    this.name= "Iron man"
  }
}
