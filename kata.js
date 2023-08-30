//  Kata: FizzBuzz

// for (i=1; i<=100; i++){
//         function FizzBuzz (){
//         if (i%3==0 && i%5==0) {
//             console.log ("FizzBuzz")
//         } else if (i%3==0){
//             console.log ("Fizz")
//         } else if (i%5==0) {
//             console.log ("Buzz")
//         } else (console.log(i))
    
//     }
//     FizzBuzz()
    
// }

// Kata: numeros romanos

let numero = prompt ("Escribi un numero menor a 10000 que quieras convertir a romano")
document.write (numero + " en numeros romanos es " ) 

function separar (){
    if (numero > 0 && numero < 10000){
        unidades = numero % 10  
        truncarUnidad = Math.trunc (numero / 10)
        decenas = truncarUnidad % 10
        truncarDecena = Math.trunc (truncarUnidad / 10)
        centenas = truncarDecena % 10
        truncarCentena = Math.trunc (truncarDecena / 10)
        millares = truncarCentena % 10
                    
    }
}

separar ()

 decenasFinal = decenas * 10
 centenasFinal = centenas * 100
 millaresFinal = millares * 1000 

 function Millares (){
    if (millaresFinal == 1000){
        document.write ("M")
     } else if (millaresFinal == 2000) {
         document.write ("MM")
     }  else if (millaresFinal == 3000) {
        document.write ("MMM")
    } else if (millaresFinal == 4000) {
        document.write ("<span>IV</span>")
    } else if (millaresFinal == 5000) {
        document.write ("<span>V</span>")
    } else if (millaresFinal == 6000) {
        document.write ("<span>VI</span>")
    } else if (millaresFinal == 7000) {
        document.write ("<span>VII</span>")
    } else if (millaresFinal == 8000) {
        document.write ("<span>VIII</span>")
    } else if (millaresFinal == 9000) {
        document.write ("<span>IX</span>")
    }
}
Millares ()

function Centena (){
    if (centenasFinal == 100){
        document.write ("C")
     } else if (centenasFinal == 200) {
         document.write ("CC")
     } else if (centenasFinal == 300) {
        document.write ("CCC")
    } else if (centenasFinal == 400) {
        document.write ("CD")
    } else if (centenasFinal == 500) {
        document.write ("D")
    } else if (centenasFinal == 600) {
        document.write ("DC")
    } else if (centenasFinal == 700) {
        document.write ("DCC")
    } else if (centenasFinal == 800) {
        document.write ("DCCC")
    } else if (centenasFinal == 900) {
        document.write ("CM")
    }
}
Centena ()

function Decena (){
    if (decenasFinal == 10){
        document.write ("X")
     } else if (decenasFinal == 20) {
         document.write ("XX")
     } else if (decenasFinal == 30) {
        document.write ("XXX")
    } else if (decenasFinal == 40) {
        document.write ("XL")
    } else if (decenasFinal == 50) {
        document.write ("L")
    } else if (decenasFinal == 60) {
        document.write ("LX")
    } else if (decenasFinal == 70) {
        document.write ("LXX")
    } else if (decenasFinal == 80) {
        document.write ("LXXX")
    } else if (decenasFinal == 90) {
        document.write ("XC")
    }
     
}

Decena ()

function Unidad (){
    if (unidades == 1){
       document.write ("I")

    } else if (unidades == 2) {
        document.write ("II")
    }
    else if (unidades == 3) {
        document.write ("III")
    }
    else if (unidades == 4) {
        document.write ("IV")
    }
    else if (unidades == 5) {
        document.write ("V")
    }
    else if (unidades == 6) {
        document.write ("VI")
    }
    else if (unidades == 7) {
        document.write ("VII")
    }
    else if (unidades == 8) {
        document.write ("VIII")
    }
    else if (unidades == 9) {
        document.write ("IX")
    }
}

Unidad ()








    
    
