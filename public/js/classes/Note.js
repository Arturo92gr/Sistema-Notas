export class Note {


constructor(type, father, content, position) {
    this.type = type;
    this.setFather(father);
    this.content = content;
    this.position = position;
}

// El objetivo de este método es comprobar donde hemos creado la nota 
// y asignarle así el valor de normal o importante. Presupongo que nos será útil cuando queramos cambiar la nota de una 
// importancia a otra al desplazar la nota por la pantalla y según donde la sueltes cambia de categoría.
setFather(father) {
    const validFathers = ['boardImportant', 'boardNormal'];
    if (!validFathers.includes(father)) {
        throw new Error(`Invalid father value: ${father}`);
    }
    this.father = father;
}

}