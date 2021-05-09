
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

    initField(){
        this.field[0][0]['value'] = hat
    }

    getField(){
        let objectField = [];
        for(let i = 0; i < this.rows; i++){
            let fieldString = '';
            for(let j = 0; j < this.columns; j++){
                fieldString = fieldString + this.field[i][j].value;
                if(fieldString.length >= this.columns){
                    objectField.push(fieldString)
                }
            }
        }
        objectField.forEach(element => {
            console.log(element)
        })
    }
}

let testField = new Field(12, 32);

testField.createField();
testField.initField();
testField.getField();

