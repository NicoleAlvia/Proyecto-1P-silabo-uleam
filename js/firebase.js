document.addEventListener("DOMContentLoaded", function () {
    const selectProfesor = document.getElementById("selectProfesor");
    const profesorInfo = document.querySelector(".profesor-info");
    const profesorNombre = document.getElementById("profesor-nombre");
    const profesorDesc = document.getElementById("profesor-desc");
    const profesorCorreo = document.getElementById("profesor-correo");
    const profesorTelefono = document.getElementById("profesor-telefono");
    const profesorAsignatura = document.getElementById("profesor-asignatura");

    const profesores = {
        profesor1: {
            nombre: "Patricia Quiroz",
            descripcion: "Docente de la carrera de Tecnologias de la Informacion en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "patricia.quiroz@uleam.edu.ec",
            telefono: "0997568339",
            asignatura: "Aplicaciones Web 1"
        },
        profesor2: {
            nombre: "Elsa Vera",
            descripcion: "Docente de la carrera de Tecnologias de la Informacion en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "elsa.vera@uleam.edu.ec",
            telefono: "0986303723",
            asignatura: "Programacion Orientada a Objetos"
        },
        profesor3: {
            nombre: "Henry Mero",
            descripcion: "Docente de la carrera de Tecnologias de la Informacion en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "henry.mero@uleam.edu.ec",
            telefono: "0986123452",
            asignatura: "Ecuaciones Diferenciales"
        },
        profesor4: {
            nombre: "Edison Almeida",
            descripcion: "Docente de la carrera de Tecnologias de la Informacion en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "edison.almeida@uleam.edu.ec",
            telefono: "0990623852",
            asignatura: "Aplicacion de Sistemas Operativos"
        },
        profesor5: {
            nombre: "Jonny Perez",
            descripcion: "Docente de la carrera de Tecnologias de la Informacion en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "jonny.perez@uleam.edu.ec",
            telefono: "0999273971",
            asignatura: "Ingenieria de Software 1"
        },
        profesor6: {
            nombre: "Diana Bravo ",
            descripcion: "Docente de la carrera de Fonoaudiología en la Facultad de Ciencas de la Salud",
            correo: "diana.bravo@uleam.edu.ec",
            telefono: "0986123452",
            asignatura: "Eufonia"
        },
        profesor7: {
            nombre: "Byron Alcivar ",
            descripcion: "Docente de la carrera de Agropecuaria en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "byron.alcivar@uleam.edu.ec",
            telefono: "0962178244",
            asignatura: "Sanidad Vegetal"
        },
        profesor8: {
            nombre: "Maria Muñoz",
            descripcion: "Docente de la carrera de Agropecuaria en la Facultad de Ciencias de la Vida y Tecnologia",
            correo: "maria.muñoz@uleam.edu.ec",
            telefono: "0981735689",
            asignatura: "Quimica Orgánica"
        },
        profesor9: {
            nombre: "Carlos Almeida ",
            descripcion: "Docente de la carrera de Medicina en la Facultad de Ciencas de la Salud",
            correo: "carlos.almeida@uleam.edu.ec",
            telefono: "0996888851",
            asignatura: "Bioquímica"
        },
        profesor10: {
            nombre: "Maria Cedeño ",
            descripcion: "Docente de la carrera de Medicina en la Facultad de Ciencas de la Salud",
            correo: "maria.cedeño@uleam.edu.ec",
            telefono: "0986623068",
            asignatura: "Farmacología Básica"
        },
        profesor11: {
            nombre: "Beatriz Alcivar ",
            descripcion: "Docente de la carrera de Finanzas de la Facultad de Ciencias Administrativas, Contables y Comercio",
            correo: "beatriz.alcivar@uleam.edu.ec",
            telefono: "0990048721",
            asignatura: "Contabilidad Financiera"
        },
        profesor12: {
            nombre: "Walter Bailon ",
            descripcion: "Docente de la carrera de Contabilidad y Auditoria de la Facultad de Ciencias Administrativas, Contables y Comercio",
            correo: "walter.bailon@uleam.edu.ec",
            telefono: "0986682573",
            asignatura: "Contabilidad de Costos"
        },
        profesor13: {
            nombre: "Jose Barcia",
            descripcion: "Docente de la carrera de Educacion Inicial de la facultad de Educación, Turissmo, Artes y Humanidades ",
            correo: "jose.barcia@uleam.edu.ec",
            telefono: "0951009941",
            asignatura: "Análisis Detallado de Modelos Educativos y el aprendizaje"
        },
        profesor14: {
            nombre: "Elisabeth Boyes",
            descripcion: "Docente de la carrera de Educacion Inicial de la facultad de Educación, Turissmo, Artes y Humanidades",
            correo: "elisabeth.boyes@uleam.edu.ec",
            telefono: "0990872466",
            asignatura: "Literatura Infantil"
        },
        profesor15: {
            nombre: "Rosa Macias",
            descripcion: "Docente de la carrera de Educacion Inicial de la facultad de Educación, Turissmo, Artes y Humanidades",
            correo: "rosa.macias@uleam.edu.ec",
            telefono: "0986306824",
            asignatura: "Gestión de Calidad Educativa"
        },
        
    };

    selectProfesor.addEventListener("change", function () {
        const selectedValue = selectProfesor.value;
        if (selectedValue !== "none") {
            const profesor = profesores[selectedValue];
            profesorNombre.textContent = profesor.nombre;
            profesorDesc.textContent = `Descripción: ${profesor.descripcion}`;
            profesorCorreo.textContent = `Correo: ${profesor.correo}`;
            profesorTelefono.textContent = `Teléfono: ${profesor.telefono}`;
            profesorAsignatura.textContent = `Asignatura: ${profesor.asignatura}`;
            profesorInfo.style.display = "block";
        } else {
            profesorInfo.style.display = "none";
        }
    });
});