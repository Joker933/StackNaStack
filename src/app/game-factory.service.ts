import {Injectable} from '@angular/core';
import {IField, IGame} from './game.interface';
import {Game} from './Game';
import {Field} from './Field';
//import {Field2} from './Field2';

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {

  generate(): IGame {
    throw new Error('You should implement this');
  }

  vytvorPevnePole(): IField[][] {
    const field: IField[][] = [[new Field(1), new Field(1), new Field(0)],
                              [new Field(0), new Field(1), new Field(0)],
                              [new Field(0), new Field(1), new Field(0)],
                              [new Field(0), new Field(1), new Field(1)]];
    return field;
  }

  /*vytvorSkrytePole(): IField[][] {
    const pole2: IField[][] = [[new Field2(3), new Field2(3), new Field2(3)],
                              [new Field2(3), new Field2(3), new Field2(3)],
                              [new Field2(3), new Field2(3), new Field2(3)],
                              [new Field2(3), new Field2(3), new Field2(3)]];
    return pole2;
  }*/

  vytvorHru(pole: IField[][], didWin: boolean): IGame {
    const game = new Game(pole, didWin);
    return game;
  }

  //vytvorPrekrytiHru(pole2: IField[][], didWin: boolean): IGame {
  //  const game = new Game(pole2, didWin);
  //  return gane;
  //}

}
