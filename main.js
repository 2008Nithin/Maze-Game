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
        this.width = width;
        this.height = height;
    }
}


