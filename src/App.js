import './App.css';
import Logo from './componentes/Logo';
import perfil from './imagens/perfil2.svg';
import sacola from './imagens/sacola2.svg'

const textOptions = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];
const iconsHeader = [perfil,sacola];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {textOptions.map( (text) => (
            <li className='option'><p>{text}</p></li>
          ) ) }
        </ul>

        <ul className='icons'>
            {iconsHeader.map( (icons) => ( 
            <li className='icon'><img src={icons}></img></li>
          ) )}
        </ul>
        </header>
    </div>
  );
}

export default App;
