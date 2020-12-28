import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
        {id: 1, texto: 'tarea 1'},
        {id: 2, texto: 'tarea 2'},
        {id: 3, texto: 'tarea 3'},
    ]

    const [lista, setLista] = useState(estadoInicial)

   const agregarElemento = () => {
       console.log('click')
       setLista([
           ...lista,  //lista = estadoInicial (ou seja, todos os elementos)
           {id: 4, texto: 'tarea 4'}
       ])
   }

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map( (item, index) => (
                    <h4 key={index}>{item.texto}</h4>
                ))
            }

            <button onClick={() => agregarElemento()}>Agragar</button>
        </div>
    )
}

export default Listas
