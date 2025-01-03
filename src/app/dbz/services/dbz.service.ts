import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as id } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: id(),
    name:"Goku",
    power: 10000,
  },{
    id: id(),
    name:"Vegeta",
    power: 9000,
  },{
    id: id(),
    name: "Trunks",
    power: 5000,
  }];

  onNewCharacter(character: Character):void{
    const newCharacter = {...character,id: id()}
    this.characters.push(newCharacter)
  }

  onDeleteCharacter(id:string): void {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
