// const $name = document.getElementById('name');
// const $box = document.getElementById('box');
// const $container = document.getElementById('container');
// const $btn = document.getElementById('btn');

import { popUp } from "./js/popUp.js";
import { reservation } from "./js/reservation.js";


document.addEventListener('click', (e)=>{
  // console.log(e.target.id);
  if(e.target.id == "btnShow" || e.target.id == "formBtnCancel"){ popUp('form', e)}
  if(e.target.id == "formBtnSave"){ reservation(e); }
});


// const htmlP = `
// <div class="box" id="box">
//     <p class="text">Nombre</p>
//     <p class="text">Servicio</p>
//     <p class="text">Costo</p>
//     <p class="text">Fecha</p>
//     <p class="text">Hora</p>
//   </div>`;
// console.log(parseInt($name.value));
// const $div = document.createElement('div');
// $div.innerHTML = htmlP;
// $container.appendChild($div.firstElementChild);
// let fecha = new Date();
// console.log(fecha.getFullYear());
// console.log(fecha.getMonth()+1);
// console.log(fecha.getDate());