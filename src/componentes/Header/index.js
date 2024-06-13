import Logo from '../Logo'
import OptionsHeader from '../optionsHeader'
import IconsHeader from '../iconsHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OptionsHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header;