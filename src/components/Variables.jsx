import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante'
    const imagen = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolectivoraroproposito.wordpress.com%2F2017%2F05%2F03%2Fimagine-dragons-muestran-thunder%2F&psig=AOvVaw3OVKluhtcYvo2eJihuzldK&ust=1608860603948000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjWpIK_5e0CFQAAAAAdAAAAABAD'

    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src={imagen} alt="Imagen Dragons" />
        </div>
    )
}

export default Variables
