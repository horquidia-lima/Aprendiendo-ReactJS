import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)

    const aumentar = () => {
        console.log('click')
        setContador(contador + 1) //contador = estado inicial 0 + 1 (ciclo)
    }

    return (
        <div>
            <h2>Contador</h2>
            <h3>nuestro numero aumentando: {contador}</h3>
            <h4>
                {
                    //evaluar ? exito : negativa
                    contador > 2 ? 'Es mayor a dos' : 'Es menor a dos'
                }
            </h4>
            <button onClick={() => aumentar()}>Aumentar</button>
        </div>
    )
}

export default Contador
