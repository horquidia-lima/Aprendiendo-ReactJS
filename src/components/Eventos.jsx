import React, {useState} from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde estado')
    //texto = estado que contem a string e setTexto seria a funcao que modifica o texto

    const eventoClick = () => {
        console.log('Me diste un click')
        setTexto('Cambiando el texto...')
    }
    return (
        <div>
            <hr />
            <h2>{texto}</h2>
            <button onClick={ () => eventoClick()}>Click</button>
        </div>
    )
}

export default Eventos
