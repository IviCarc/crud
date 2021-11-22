import './App.css';
import React from 'react';
import Formulario from './Formulario';

class Datos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ricos : 0,
            cat1 : 0,
            cat2 : 0,
            cat3 : 0,
            cat4 : 0,
            porcentajeHombres : 0,
        }
    }
    
    test () {
        console.log("PRUEBA")
    }
    
    render () {
        <Formulario data={this.state}/>
    }

}

export default Datos

/*3)Una concesionaria de automóviles registra en una planilla los datos de las personas 
que vienen a preguntar por algún plan o para la compra de algún automóvil. Los 
vehículos los tiene divididos en cuatro categorías que están numeradas del 1 al 4, a 
saber: 1-sedan, 2-pickups, 3-standard, 4-superiores. Los datos que se le piden a los 
interesados son: Nombre y apellido, edad, género, estado civil, cantidad de hijos, 
categoría del vehículo que le interesa, importe que está dispuesto a pagar por un auto. 
El programa que la concesionaria necesita debe permitir cargar los datos necesarios 
para obtener los siguientes resultados: cantidad de personas que consultan y se 
interesan por un vehículo de un monto superior a los $ 100.000, cantidad de personas 
que optaron por cada categoría, porcentaje de hombres que hicieron consultas respecto 
al total.*/