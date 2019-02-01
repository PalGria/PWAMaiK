function wow () {
    alert("wowie :3");
}
function cargarCollapsibles () {
    //buscamos los elementos en el dom
    var elems = document.querySelectorAll('.collapsible');
    //definimos opciones
    var options = {};
    options.accordion = false; 
    //inicializamos todos los elementos colapsibles
    var instances = M.Collapsible.init(elems, options);

}
function getPlatos(){
    const Http = new XMLHttpRequest();
    const url='http://localhost:3000/api/dias/hoy';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
}
}
document.addEventListener('DOMContentLoaded', function() {
    //inicializamos materialize
    M.AutoInit();
    cargarCollapsibles();
    getPlatos();
  });

