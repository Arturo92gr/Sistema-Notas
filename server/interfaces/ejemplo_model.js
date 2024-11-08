export const model1 = {
    panels1: [
        {
            type: "container",
            panelName: "app",
            panelDescription: "Aplicación de Notas",
            panelWidth: "100%",
            panelHeight: "100%",
            cssData: "app_style",
        }
    ],
    components1: [
        {
            type: "title",
            father: "app",
            content: "Notas",
            position: "0,0"
        },
        {
            type: "form",
            father: "app",
            formName: "noteForm",
            formDescription: "Formulario para añadir una nota",
            position: "0,1"
        },
        {
            type: "label",
            father: "noteForm",
            content: "Tipo de Nota:",
            position: "0,0"
        },
        {
            type: "select",
            father: "noteForm",
            selectName: "type",
            options: [
                { value: "normal", label: "Normal" },
                { value: "critica", label: "Crítica" }
            ],
            position: "0,1"
        },
        {
            type: "label",
            father: "noteForm",
            content: "Contenido:",
            position: "1,0"
        },
        {
            type: "textarea",
            father: "noteForm",
            textareaName: "content",
            position: "1,1"
        },
        {
            type: "button",
            father: "noteForm",
            content: "Añadir",
            buttonType: "submit",
            position: "2,0"
        },
        {
            type: "label",
            father: "app",
            content: "Filtrar por Mes:",
            position: "1,0"
        },
        {
            type: "select",
            father: "app",
            selectName: "monthFilter",
            options: [
                { value: "", label: "Todos" },
                { value: "1", label: "Enero" },
                { value: "2", label: "Febrero" },
                { value: "3", label: "Marzo" },
                { value: "4", label: "Abril" },
                { value: "5", label: "Mayo" },
                { value: "6", label: "Junio" },
                { value: "7", label: "Julio" },
                { value: "8", label: "Agosto" },
                { value: "9", label: "Septiembre" },
                { value: "10", label: "Octubre" },
                { value: "11", label: "Noviembre" },
                { value: "12", label: "Diciembre" }
            ],
            position: "1,1"
        },
        {
            type: "container",
            father: "app",
            containerName: "notesList",
            containerDescription: "Lista de Notas",
            position: "2,0"
        }
    ]
};