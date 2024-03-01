import './estilo.css'
import Logo from '../Logo'
import OptionsHeader from '../optionsHeader'
import IconsHeader from '../iconsHeader'

function Header(){
    return(
        <header className='App-header'>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </header>
    )
}

export default Header;