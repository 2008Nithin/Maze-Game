
let hat = '^';
const hole = 'O';
let fieldCharacter = {
    arrValue: ['░'],
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
    constructor(width, height){
        this.rows = width;
        this.columns = height;
        this.field = [];
    }

    createField(){
        for(let i = 0; i < this.rows; i++){
            this.field.push([]);
            for(let j = 0; j < this.columns; j++){
                this.field[i].push(fieldCharacter);
            }
        }
    }

    getField(){
    }
}

let testField = new Field(11, 6);

testField.createField();
testField.getField();

