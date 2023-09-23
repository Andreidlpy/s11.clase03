// 1.Un estudiante realiza 4 exámenes, calcular el promedio de estos

const calcularPromedio = ( exam1 = 0, exam2 = 0, exam3 = 0, exam4 = 0  ) => {

    return ( exam1 + exam2 + exam3 + exam4 ) / 4
}
// 2
const calcularAreaRectangulo = ( largo = 0 , ancho = 0 ) => {
    return largo * ancho;
}
// 3
const calcularAreaTriangulo = ( base = 0 , altura = 0 ) => {
    return ( base * altura ) / 2 ;
}
// 4
const calcularAreaCircunferencia = ( radio = 2 ) => {
    const pi = 3.14;
    return pi * ( radio * radio );
}
// 5
const calcularSueldoSemanal = (  horasTrabajadas = 0, salarioPorHora = 0 ) => {
    let dias = 7;
    return ( horasTrabajadas * salarioPorHora ) * dias ;
};
// 6
const convertSolesToDolars = ( cantidad = 0 ) => {
      return ( cantidad / 3.73 ).toFixed(2)
};
// 7
const obtenerUltimoELemento = ( numeros = [] ) => {
    return numeros[numeros.length - 1];
}
// 8
const añadirNumeroArreglo = ( array = [], numero = 0 ) => {
    return [ ...array, numero ]
};
// 9
const obtenerPromedioArreglo = ( array = [] ) => {

    let suma = 0;

    array.forEach(( numero )  => {
        suma += numero;
    });
    const promedio = suma / array.length;

    return promedio;
    
};
// 10
const obtenerSumaPares = ( numeros = [] ) => {

    let suma = 0;
    numeros.forEach(( numero ) => {
        if( numero % 2 === 0) suma += numero;
    });
    return suma
};
// 11
const booleanoArray = ( array1 = [], array2 = []) => {
    const newArray = [ ...array1, ...array2 ];
    return newArray.length >= 10 
};
// 12
const funcionArray = ( array1 = [], array2 = []) => {
    const newArray = [ ...array1, ...array2 ];
    const result = [];

    newArray.forEach( ( numero ) => {
        result.push( numero * 2);
    });

    const result2 = newArray.map( numero => numero * 2 );
  
    return result2
};

// 13
const funcionesArray = () => {

    let personas = [
            { nombre: 'boris', hobby: 'correr', salario: 2000 },
            { nombre: 'luis', hobby: 'cantar', salario: 1500 },
            { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
            { nombre: 'percy', hobby: 'cantar', salario: 1100 },
            { nombre: 'rosa', hobby: 'leer', salario: 3000 },
    ];
        
    const SALARIO_MAYOR_1200  = personas.filter( ( { salario } ) => salario > 1200  );
    const HOBBY_SALTAR        = personas.find(( { hobby } ) => hobby === 'cantar'  );
    const GUSTAR_LEER         = personas.some( ( { hobby } ) => hobby === 'leer' )
        
    return { SALARIO_MAYOR_1200, HOBBY_SALTAR, GUSTAR_LEER }
        
} 
// 14

const encontrarPersonEncarcagada = () => {

    let diaSemana = prompt('Ingrese su dia'); 
    diaSemana = diaSemana.trim().toLowerCase();

    const DIA_POR_DEFECTO = 'no hay servicio ';
    const turnServices =[
        { dia: 'lunes' , nombre     : 'Maria' },
        { dia: 'martes' , nombre    : 'Luis' },
        { dia: 'miercoles' , nombre : 'Antonia' },
        { dia: 'jueves' , nombre    : 'Pedro' },
        { dia: 'viernes' , nombre   : 'Marisa' },
    ];
    const personaEncargada = turnServices.find(({ dia }) => diaSemana === dia );
    
    if( personaEncargada === undefined) return DIA_POR_DEFECTO;

    const { nombre } = personaEncargada;
   
    return `Este día se encarga ${ nombre }`;

}

const encontrarPrecioProducto = ( producto = 'monitor' ) => {
    
    const productos = [
        {nombre: 'monitor', precio: 200},
        {nombre: 'teclado', precio: 20},
        {nombre: 'raton', precio: 10},
    ]

    const productoEncontrado =  productos.filter( ({nombre}) => {
        return nombre === producto.trim().toLowerCase();
    })
    if( productoEncontrado.length === 0 ) {
        console.log('no existe un producto con ese nombre');
        return
    }
    const { precio } = productoEncontrado[0];
    console.log(`El precio del producto es ${precio}€`);
    return precio
}
// let nombreProducto = prompt('Ingrese Producto');
// encontrarPrecioProducto( nombreProducto) 