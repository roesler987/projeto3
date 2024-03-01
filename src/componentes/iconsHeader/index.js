import './estilo.css'
import perfil from '../../imagens/perfil2.svg';
import sacola from '../../imagens/sacola2.svg';

const icons = [perfil,sacola];

function IconsHeader() {
    return (
        <ul className='icons'>
            { icons.map( (icon) => (
            <li className='icon'><img src={icon}></img></li>
            )) }
        </ul>
    )
}

export default IconsHeader;