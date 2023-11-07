 // evalua si lo que le estamos diciendo 
let dia_semana =  "lunes"
let mensaje =  ""

switch(dia_semana){
    case "lunes" :
    case "martes" :
    case "miércoles" :
    case "jueves" :
    case "viernes" :
        mensaje = "Hoy es laborable"
        break// es un corte, y así finaliza el código, interrumpe 
    default :
        mensaje = "Hoy no es laborable"
} 

switch(dia_semana){
    case "lunes" :
        mensaje = "Hoy es laborable"
        break
    case "martes" :
        mensaje = "Hoy es laborable"
        break
    case "miércoles" :
        mensaje = "Hoy es laborable"
        break
    case "jueves" :
        mensaje = "Hoy es laborable"
        break
    case "viernes" :
        mensaje = "Hoy es laborable"
        break
    default :
        mensaje = "Hoy no es laborable"
} 


console.log(mensaje);