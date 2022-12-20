function pintarNombre(){
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()

const temas = [
    "ARTISTAS", "MÚSICAS", "GENEROS MUSICALES"
]