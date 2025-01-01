import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ["Hulk", "Thor", "Spiderman", "Iron man", "Capitan America"];
  public deleteHeroe?: string;

  remuveHerue(): void {
    this.deleteHeroe =this.heroesNames.pop();
  }
}
