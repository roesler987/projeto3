import './estilo.css'

const textOptions = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];

function OptionsHeader (){
    return(
        <ul className='options'>
            {textOptions.map( (text) => (
                <li className='option'><p>{text}</p></li>
        ) ) }
      </ul>
    )
}

export default OptionsHeader;