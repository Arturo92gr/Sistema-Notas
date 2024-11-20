export const model1 = {

    // Establece los dos paneles de la aplicación, normal y crítico. Su estructura básica será
    // la misma pero ya le pondremos diferentes detalles en el css.
    "panels": [
        {
            "type": "panel",
            "panelName": "panelNormal",
            "panelDescription": "Board for Normal notes",
            "panelWidth": "100%",
            "panelHeight": "100%",
            "cssData": "board-normal-section"
        },
        {
            "type": "board",
            "panelName": "boardCritical",
            "panelDescription": "Board for Critical notes",
            "panelWidth": "100%",
            "panelHeight": "100%",
            "cssData": "board-critical-section"
        }
    ],

    // Establece los componentes de la aplicación, en este caso dos botones y las notas.
    //los botones deberán tener una posición fija mientras que las notas sí podrán moverse.
    "components": [
        {
            "type": "button",
            "father": "panelNormal",
            "content": "Create Normal Note",
            "position": "0,0"
        },
        {
            "type": "button",
            "father": "panelImportant",
            "content": "Create Important Note",
            "position": "0,0"
        }
    ],

    // Esta sección simplemente añade notas para probar las funcionalidades básicas de la app.
    // El objetivo sería crear notas en una base de datos que cumplan las mismas funcionalidades que aplicaremos a estas notas.
    "notes": [

        {
            "type": "note",
            "father": "panelNormal",
            "content": "Nota 1 Normal",
            "position": "100,100",
            "cssData": "note-normal"
        },
        {
            "type": "note",
            "father": "panelImportant",
            "content": "Nota 1 Importante",
            "position": "150,150",
            "cssData": "note-critical"
        }
    ]
}