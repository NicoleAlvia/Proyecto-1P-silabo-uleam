function mostrar(str) {
    var Docente_Escogido = '';
    if (str == 'Persona_1') { Docente_Escogido = 'Patricia Quiroz'; } else if (str == 'Persona_2') { Docente_Escogido = 'Robert Moreira'; } else if (str == 'Persona_3') { Docente_Escogido = 'Willian Delgado'; } else if (str == 'Persona_4') { Docente_Escogido = 'Henry Mero'; } else if (str == 'Persona_5') { Docente_Escogido = 'Jonny Peréz'; } else if (str == 'Persona_6') { Docente_Escogido = 'Byron Alcívar'; } else if (str == 'Persona_7') { Docente_Escogido = 'Elizalde Cárdenas'; } else if (str == 'Persona_8') { Docente_Escogido = 'Jimmy Cevallos'; } else if (str == 'Persona_9') { Docente_Escogido = 'María Muñoz'; } else if (str == 'Persona_10') { Docente_Escogido = 'Ramón Molina'; } else if (str == 'Persona_11') { Docente_Escogido = 'Wendy Gómez'; } else if (str == 'Persona_12') { Docente_Escogido = 'Juan Napa'; } else if (str == 'Persona_13') { Docente_Escogido = 'Carlos Almeida'; } else if (str == 'Persona_14') { Docente_Escogido = 'María Cedeño'; } else if (str == 'Persona_15') { Docente_Escogido = 'Vanessa Cedeño'; } else if (str == 'Persona_16') { Docente_Escogido = 'Beatriz Alcívar'; } else if (str == 'Persona_17') { Docente_Escogido = 'Walter Bailón'; } else if (str == 'Persona_18') { Docente_Escogido = 'Paola Castillo'; } else if (str == 'Persona_19') { Docente_Escogido = 'José Barcia'; } else if (str == 'Persona_20') { Docente_Escogido = 'Elisabeth Boyes'; } else if (str == 'Persona_21') { Docente_Escogido = 'Rosa Macías'; } else if (str == 'Persona_22') { Docente_Escogido = 'Veronica Avila'; } else if (str == 'Persona_23') { Docente_Escogido = 'Javier Baque'; } else if (str == 'Persona_24') { Docente_Escogido = 'Carlos Delgado'; } else if (str == 'Persona_25') { Docente_Escogido = 'Lenin Arroyo'; } else if (str == 'Persona_26') { Docente_Escogido = 'Angela Aldaz'; } else if (str == 'Persona_27') { Docente_Escogido = 'Mayra Bravo'; } else if (str == 'Persona_28') { Docente_Escogido = 'Ricardo Bravo'; } else if (str == 'Persona_29') { Docente_Escogido = 'Diana Bravo'; } else if (str == 'Persona_30') { Docente_Escogido = 'Majiory Ibarra'; } else { Docente_Escogido = 'none'; }
    var xmlhttp;
    if (str.length == 0 || Docente_Escogido == 'none') {
        document.getElementById("txtInformacion").innerHTML = "No existen datos del Docente.";
        mostrarDocentes();
        return;
    }
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonResponse = xmlhttp.responseText;
            var objeto_json = JSON.parse(jsonResponse);
            docenteRecibidos = objeto_json.Datos_Docentes.Docente_lista;

            for (var i = 0; i < docenteRecibidos.length; i++) {
                var nombreDocente = objeto_json.Datos_Docentes.Docente_lista[i].nombre_titulo;
                if (nombreDocente == Docente_Escogido) {
                    document.getElementById("txtInformacion").innerHTML = ' Los datos de  ' +
                        nombreDocente + ' son: ';
                    var selectDocentes = objeto_json.Datos_Docentes.Docente_lista[i].datos_lista;
                    mostrarDocentes(selectDocentes);
                }
            }

        }
    }
}

function mostrarDocentes(arrayDocentes) {
    var nodoMostrarResultados = document.getElementById('listaDocentes');
    if (!arrayDocentes) { nodoMostrarResultados.innerHTML = ''; return }
    var contenidosAMostrar = '';
    for (var contenido = 0; contenido < arrayDocentes.length; contenido++) {
        contenidosAMostrar = contenidosAMostrar + '<div id="docentes' + contenido + '">';
        contenidosAMostrar += arrayDocentes[contenido] + '</div>';
    }
    if (contenidosAMostrar) { nodoMostrarResultados.innerHTML = contenidosAMostrar; }
}