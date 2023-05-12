const nameCar1 = prompt('Qual é o nome do carro 1 ? ');
const speedCar1 = prompt('Qual é a velocidade do carro 1 ? ');
const nameCar2 = prompt('Qual é o nome do carro 2 ? ');
const speedCar2 = prompt('Qual é a velocidade do carro 2 ? ');

if (speedCar1 > speedCar2) {
    alert('O ' + nameCar1 + " é mais rápido que o " + nameCar2);
} else if (speedCar2 > speedCar1) {
    alert('O ' + nameCar2 + " é mais rápido que o " + nameCar1);
} else {
    alert('A velocidade do ' + nameCar1 + " é a mesma do " + nameCar2);
}