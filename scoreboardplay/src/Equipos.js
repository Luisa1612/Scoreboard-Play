//import './CSS/style.css'

export function Equipos (props){
    const etiqueta={
        color:'red',
        border:'1px solid blue',
        with: '400px',
        dislplay: 'block'
    }




    return <div style={etiqueta}>
        <ul>
        <li>nombre:{props.nombre}</li>
        <li> partidos jugados{props.jugados}</li>
        <li>promedio: {props.promedio}</li>
        <li>ultimos juegos{props.ultimos}</li>
        <li>record: ganados{props.record[0]}/perdidos{props.record[1]}</li>
        <li>juegos internacionales:{props.internacional ? 'si':'no'}</li>
        <li>ubicacion en:{props.ubicado.pais}/{props.ubicado.ciudad}</li>
        </ul>

    </div>
}