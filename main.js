//Matrices 10-02-2021
//Tablas de multiplicar del 1 al 10
const matrix1 = [];
for (let i = 1; i <= 10; i++) {
    let data = [];
    for (let j = 1; j <= 10; j++) {
        data.push(i*j);
    }
    matrix1[i] = data;
}
console.log(matrix1);
//console.log(matriz[5][6]); //imprimir posición i=5,j=6


const matrix2 = [];
let flag = true;
for (let i = 0; i <= 10; i++) {
    let data = new Array(11).fill(null,0,11);
    for (let j = 0; j <= 10; j++) {
        if(i==3 && flag){
            data = new Array(5).fill(null,0,6);
            data.unshift('Docente','Willmer','Funeme',41,'casado',"Bogotá");
            flag = false;
        }
    }
    matrix2[i] = data;
}
console.log(matrix2);
//console.log(matrix2[3]);