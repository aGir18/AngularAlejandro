import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

function escribirTextoArchivo() {
  console.log("Paso por función 1");
  alert("¡Enhorabuena! ¡Has registrado el negocio!");
}

function escribirTextoArchivo2() {
  alert("¡Limpiaste TODOS los campos!");
}

function saludoBob() {
  alert("¡Hola! ¡Me llamo Bob!")
}

//document.querySelector('botonRegistro2').addEventListener('click', (e:Event) => escribirTextoArchivo2());

//let selectorFormularioFarmacia = document.getElementById('formFarmacia');

//let selectorFormularioFarmacia: any = document.querySelector('#formFarmacia');
// getElementById("formFarmacia") as HTMLInputElement | null;
//let selectorFormularioFarmacia = new ElementRef('formFarmacia');
//let variableFormulario = new ElementRef('eleccionAsociacion');

//console.info(variableFormulario);
//console.warn(selectorFormularioFarmacia);
//console.info(selectorFormularioFarmacia);


//var selectorTipoNegocio: any = document.getElementById('tipoNegocio2')! as HTMLInputElement | null;
/*let selectorTipoNegocio: any = document.querySelector('#tipoNegocio2');
selectorTipoNegocio.addEventListener(('select'), function () {
    elegirNegocio();
});*/


/*
selectorTipoNegocio.addEventListener(('change'), function () {
    var opcionSeleccionada: any = this.options[selectorTipoNegocio.selectedIndex];
    elegirNegocio();
});*/

/*
let selectorOptica: any = document.getElementById('selectorOptica');
let selectorFarmacia: any = document.getElementById('selectorFarmacia');


function elegirNegocio() {
    if (selectorTipoNegocio.value == "farmacia") {
        //selectorOptica.remove();
        selectorOptica.setAttribute('hidden','');
        selectorFarmacia.removeAttribute('hidden');
        console.warn('¡Has borrado la parte de la optica!');
    } if (selectorTipoNegocio.value == "optica") {
        //selectorFarmacia.remove();
        selectorFarmacia.setAttribute('hidden','');
        selectorOptica.removeAttribute('hidden');
        console.warn('¡Has borrado la parte de la farmacia!');
    } if (selectorTipoNegocio.value == "---") {
        selectorFarmacia.setAttribute('hidden','');
        selectorOptica.setAttribute('hidden','');
    }
}*/
