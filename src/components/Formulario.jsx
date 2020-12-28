import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const guardarDatos = (e) => {
        e.preventDefault() // nao executar o metodo get na url (?)
        
        if(!fruta.trim()){  //function trim limpia datos
            console.log('esta vacia fruta')
            return
        }

        if(!descripcion.trim()){  //function trim limpia datos
            console.log('esta vacia descripcion')
            return
        }

        console.log('procesando datos...' + fruta + descripcion) //validar datos del formulario

        e.target.reset()  // limpiando os campos do formulario apos escrever

        setFruta('') //lipiando los estados
        setDescripcion('') //lipiando los estados

    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos}> 
                <input
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={(e) => setFruta(e.target.value)} //evento.target.value capta o que o usuario digita
                />

                <input
                    type="text"
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Formulario
