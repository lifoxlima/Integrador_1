/* declaro todo, variables y constantes */
const valor=200;
let desc_estudiante = 0.2;
let desc_trainee = 0.5;
let desc_junio = 0.85;

let importeTotal;
let total = document.getElementById('subtotal');
let resumen = document.getElementById('btn-resumen');
let borrar = document.getElementById('btn-borrar');


function select_cat(){
    let cantidad=document.getElementById('cantidad').value;
   
    if (categoria.selectedOptions[0].value=='estudiante'){
        importeTotal=(valor*cantidad*desc_estudiante)
        console.log(importeTotal)
        
    }else if (categoria.selectedOptions[0].value=='trainee'){
        importeTotal=valor*cantidad*desc_trainee
        console.log(importeTotal)
        
    } else if (categoria.selectedOptions[0].value=='junior'){
        importeTotal=valor*cantidad*desc_junio
        console.log(importeTotal)
        
    } else if(categoria.selectedOptions[0].value=='general'){
        importeTotal=valor*cantidad
        
        
    }; 
    return importeTotal;

}


resumen.addEventListener('click', () => {
    console.log(select_cat);
    total.innerText = ("Total a Pagar: $ " +(importeTotal));
})

borrar.addEventListener('click', () => {
    total.innerText = ("Total a Pagar: $");
})


