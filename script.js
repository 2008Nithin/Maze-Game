

let hat = '^';
const hole = 'O';
let fieldCharacter = {
    value: '░',
    id: 0,
    type: 'normal',
    north: true,
    south: true,
    west: true,
    east: true
}
const pathCharacter = '*';

let randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

class Field {
  constructor(numRow, numCol){
      this._numRow = numRow;
      this._numCol = numCol;
      this._fieldArr = [];
      this.field = [];
      this.path = [];
  }

  createField() {
    for(let i = 0; i < this._numRow; i++){
        this._fieldArr.push([]);
    }
    this._fieldArr.forEach(element => {
        for(let i = 0; i < this._numCol; i++){
            element.push(fieldCharacter);
        }
    })

    this._fieldArr.forEach(element => {
        this.field.push(element.join(''))
    });

    this.path = this.field.join('')
  }

  initField(){
    
    this._fieldArr.forEach(element => {
        for(let i = 0; i < this._numCol; i++){
            if(element[i].value != pathCharacter | element[i].value != fieldCharacter.value | element[i] != fieldCharacter.type != 'path'){
                if(randomNumber(5) === 2){
                    element[i] = hole;
                }
            }
        }
    })

    this._fieldArr[0][0] = pathCharacter;
    this._fieldArr[this._numRow - 1][this._numCol - 1] = hat;
  }

  generatePath(){

  }

  findDir(){
    
  }

  get getField(){
      let print = [];
      console.log(this._fieldArr)
      this._fieldArr.forEach(element => {
         print.push(element.value.join(''))
      });
  }    
}

let myField = new Field(6, 11);

myField.createField();

myField.initField();

myField.generatePath();

myField.getField;


