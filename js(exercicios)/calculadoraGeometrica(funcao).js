let opt
while (opt !== "6") {
    let number = "";
    let number2 = "";
    let number3 = "";
    opt = prompt("Oq vc gostaria de fazer? \n1. Àrea do triangulo; \n2. Àrea do retangulo; \n3. Àrea do quadrado \n4. Àrea trapézio; \n5. Àrea do circulo; \n6. Sair;")

    function triangulo(base, height) {
        return (base * height) / 2

    }

    function retangulo(base, height) {
        return base * height

    }
    function quadrado(side) {
        return side * side

    }

    function trapezio(biggerBase, MinorBase, height) {
        return (biggerBase + MinorBase) * height / 2

    }
    function circulo(ray) {
        return 3.14 * (ray * ray)

    }

    switch (opt) {
        case "1":

            number = prompt("Quanto é a base? ");
            number2 = prompt("Quanto é a altura? ");
            alert(triangulo(number, number2));
            break;

        case "2":
            number = prompt("Quanto é a base? ");
            number2 = prompt("Quanto é a altura? ");
            alert(retangulo(number, number2));
            break;

        case "3":
            number = prompt("Quanto é o lado? ");
            alert(quadrado(number));
            break;

        case "4":

            number = parseFloat(prompt("Quanto é a base maior? "));
            number2 = parseFloat(prompt("Quanto é a base menor? "));
            number3 = prompt("Quanto é a altura?");
            alert(trapezio(number, number2, number3));
            break;

        case "5":

            number = prompt("Quanto é o raio? ");
            alert(circulo(number));
            break;

        case "6":
            alert("Finalizando...")
            break;

        default:
            alert("Opção inválida");

    }

}