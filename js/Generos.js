let Generos = [
{cod_genero: "M",
des_genero: "Masculino",	
},
{cod_genero: "F",
des_genero: "Femenino",	
},
{cod_genero: "L",
des_genero: "Lesbiana",	
},
{cod_genero: "G",
des_genero: "Gay",	
},
{cod_genero: "B",
des_genero: "Bisexual",	
},
{cod_genero: "T",
des_genero: "Transexual",	
},
]
function Generos(cod_genero) {
    
    let busgen = generos.find(gn => gn.cod_genero === cod_genero);
    if (typeof busgen === "undefined") {
        document.getElementById("tex-genero").value = "generoinexistente";
    } else {
        document.getElementById("tex-genero").value = busgen.des_genero;
    }
}