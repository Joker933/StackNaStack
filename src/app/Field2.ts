import {FieldValue, IField, IGame} from './game.interface';

export class Field implements IField{
  value: FieldValue;
  constructor(value: FieldValue) {
    this.value = value;
  }

  // @ts-ignore
  shoot(): IGame {
  }

}
