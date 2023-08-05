let usuario = 'santiago'
let password = '123456'
let opcion
let totalCopias
let totalImpr
let totalInternet



usuario = prompt("Ingresa tu usuario:")
contraseña = prompt("Ingresa tu contraseña:")

if (usuario && contraseña === "123456"){
    alert(`¡Bienvenido al sistema , ${usuario}!`)

    opcion = Number(prompt('Selecciones elservicio a utilizar: \n 1.Fotocopiado \n 2.Impresión \n 3.Internet'))
    switch (opcion) 
        {

           case 1:
            
            let cantidadCopias = Number(prompt("Ingrese la cantidad de cada fotocopia:"))
            let valorCopia = Number(prompt("Ingrese el valor de cada fotocopia:"))
            
                totalCopias = cantidadCopias * valorCopia;

                console.log('USTED SELECCIONO FOTOCOPIAS')
                let opcionCopias = Number(prompt("Seleccione una opcion \n 1. Estudiante \n 2. Particular"))

                switch (opcionCopias)
                {

                    case 1:
                        console.log('1. Estudiante');
                        totalCopias = totalCopias - (totalCopias * 0.05)    
                        console.log("El total a pagar es: " + totalCopias);
                        
                    break;

                    case 2 :
                        console.log('2. Personal externo');
                        console.log("El total a pagar es: " + totalCopias);
                    break;
                }
                                  

        break;

            case 2:
              
            let cantidadImpresion = Number(prompt("Ingrese la cantidad de impresion:"))
            let valorImpresion = Number(prompt("Ingrese el valor de cada impresora:"))
        
                totalImpr = cantidadImpresion* valorImpresion;

                console.log('USTED SELECCIONO IMPRESION')
                    let opcionImprimir = Number(prompt("Seleccione una opcion \n 1. Estudiante \n 2. Particular"))
    
                    switch (opcionImprimir)
                    {
    
                        case 1:
                            console.log('1. Estudiante');
                            totalImpr = totalImpr - (totalImpr * 0.05)    
                            console.log("El total a pagar es: " + totalImpr);
                            
                        break;
    
                        case 2 :
                            console.log('2. Personal externo');
                            console.log("El total a pagar es: " + totalImpr);
                        break;
                    }
                break;
                   
                break;

            case 3:
               let cantidadInternet = Number(prompt("Ingrese la cantida cantidad de horas de internet"));
               let valorInternet = Number(prompt("Ingrese el valor de cada hora"));
                         
                    totalInternet =  cantidadInternet * valorInternet;
                    console.log('USTED SELECCIONO INTERNET')
                    let opcionInternet = Number(prompt("Seleccione una opcion \n 1. Estudiante \n 2. Particular"))
    
                    switch (opcionInternet)
                    {
    
                        case 1:
                            console.log('1. Estudiante');
                            totalInternet = totalInternet - (totalInternet * 0.05)    
                            console.log("El total a pagar es: " + totalInternet);
                            
                        break;
    
                        case 2 :
                            console.log('2. Personal externo');
                            console.log("El total a pagar es: " + totalInternet);
                        break;
                    }
                break;
            
              
        }

}else{ 

    alert(`Error Varifique sus datos`);
}

