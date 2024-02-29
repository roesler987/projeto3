import './estilo.css'
import logo from '../../imagens/logo2.svg'

function Logo(){
    return(
        <div className='logo'>
            <img 
            src={logo} 
            alt='logo' className='logo-img'>
            </img>
            <p><strong>Entre</strong>Paginas</p>
        </div>
    )
}

export default Logo;