

class Usuarios {

    constructor(){
        this.personas = [];
    }

    agregarPersona( id, nombre, sala ){

        let persona = { id, nombre, sala };
        this.personas.push(persona);

        return this.personas;

    }

    getPersona( id ){

        let persona = this.personas.filter( per =>  per.id === id )[0]; // la propiedad Filter crea un nuevo arreglo y tenemos que llamar a la posicion 0 en este caso.

        return persona;
    }

    getPersonas( ){

        return this.personas;
    
    }

    getPersonasPorSala(){
    
        //.........
    
    }

    borrarPersona( id ){

        let personaBorrada = this.getPersona( id ) ; // Esto permite saber antes de borra a la persona , quien era 
        console.log('Esta es la persona Borrada: ' + personaBorrada);
        this.personas = this.personas.filter( persona =>  persona.id != id ); // return todas las personas qeu no tengan ese id en particular.

        return personaBorrada;

    }

}

module.exports = {
    Usuarios
}