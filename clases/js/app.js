let numero = 0;
function cambiar(){
    numero = 10;
}
console.log(numero);


//tipos de variables
let array = ["1","2","3"];
let nombre = "Julian";

for(let a=0; a<array.length; a++){
    console.log(array[a]);
}

array.forEach(element => {
    console.log(element);
});

//for of, for on, for

let participantes= ["pepe","juan","asdas"]

function render(){
    let contenedor = document.getElementById("root");

    contenedor.innerHTML= "<h2>" + nombre + "</h2>";

    participantes.forEach(element =>
        contenedor.innerHTML+=`
        <div class="card" "col-3" style="width: 300px;">
            <img src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    );

}
render();
