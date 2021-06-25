function additionFunction(){
    // constantes para definir los números
    const numberOne = parseInt(prompt('Inserte el primer número'));
    const numberTwo = parseInt(prompt('Inserte el segundo número'));
    const result = numberOne + numberTwo
    // checkea si los constantes cumplen los requisitos
        if (numberOne <= 0 || numberTwo <= 0 || numberOne === numberTwo) {
            alert('Los números son invalidos')
        } else {
            // mostrar el resultado de los números
            alert(`La suma entre ${numberOne} y ${numberTwo} es ${result}`)
        }
}

function subtractionFunction(){
    const numberOne = parseInt(prompt('Inserte el primer número'));
    const numberTwo = parseInt(prompt('Inserte el segundo número'));
    const result = numberOne - numberTwo
        if (numberOne <= 0 || numberTwo <= 0 || numberOne === numberTwo) {
            alert('Los números son invalidos')
        } else {
            alert(`La resta entre ${numberOne} y ${numberTwo} es ${result}`)
        }
}

function multiplicationFunction(){
    const numberOne = parseInt(prompt('Inserte el primer número'));
    const numberTwo = parseInt(prompt('Inserte el segundo número'));
    const result = numberOne * numberTwo
        if (numberOne <= 0 || numberTwo <= 0) {
            alert('Los números son invalidos')
        } else {
            alert(`La multiplicación entre ${numberOne} y ${numberTwo} es ${result}`)
        }
}

function divitionFunction(){
    const numberOne = parseInt(prompt('Inserte el primer número'));
    const numberTwo = parseInt(prompt('Inserte el segundo número'));
    const result = numberOne / numberTwo
        if (numberOne <= 0 || numberTwo <= 0 || numberOne === numberTwo) {
            alert('Los números son invalidos')
        } else {
            alert(`La división entre ${numberOne} y ${numberTwo} es ${result}`)
        }
}

function moduleFunction(){
    const numberOne = parseInt(prompt('Inserte el primer número'));
    const numberTwo = parseInt(prompt('Inserte el segundo número'));
    const result = numberOne % numberTwo
        if (numberOne <= 0 || numberTwo <= 0 || numberOne === numberTwo) {
            alert('Los números son invalidos')
        } else {
            alert(`El módulo entre ${numberOne} y ${numberTwo} es ${result}`)
        }
}

function celsiusToFahrenheit(){
    const celsius = parseInt(prompt('Inserte los gradous Celsius C°'));
    const fahrenheit = celsius * 9 / 5 + 32
        alert(`resultado es ${fahrenheit}`)

}

function celsiusToKelvin(){
    const celsius = parseInt(prompt('Inserte los gradous Celsius C°'));
    const kelvin = parseFloat(273.15);
    const result = celsius + kelvin
        alert(`resultado es ${result}`)
}

function calculateTime(){
    const days = parseInt(prompt('Inserte la cantidad de días'));
        if (days <= 0) {
            alert("El número es invalido")
        }
    const calculateTimimg = d => {
        let months = 0, years = 0, days = 0, weeks = 0;
        while(d){
           if(d >= 365){
              years++;
              d -= 365;
           }else if(d >= 30){
              months++;
              d -= 30;
           }else if(d >= 7){
              weeks++;
              d -= 7;
           }else{
              days++;
              d--;
           }
        };
        return {
           years, months, weeks, days
        };
     };
     const timeJSON = JSON.stringify(calculateTimimg(days))
     document.getElementById("time").innerHTML = timeJSON;

}

function calculateNumbers(){
    const numberOne = parseInt(prompt('Inserte la primera nota'))
        document.getElementById("numberOne").innerHTML = (numberOne)
    const numberTwo = parseInt(prompt('Inserte la segunda nota'))
        document.getElementById("numberTwo").innerHTML = (numberTwo)
    const numberThree = parseInt(prompt('Inserte la tercera nota'))
        document.getElementById("numberThree").innerHTML = (numberThree)
    const numberFour = parseInt(prompt('Inserte la cuarta nota'))
        document.getElementById("numberFour").innerHTML = (numberFour)
    const numberFive = parseInt(prompt('Inserte la quinta nota'))
        document.getElementById("numberFive").innerHTML = (numberFive)
    const numberResult = parseInt(numberOne + numberTwo + numberThree + numberFour + numberFive)
        document.getElementById("numberResult").innerHTML = (numberResult / 5)
}