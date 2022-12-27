import './header.css';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <Link className="logo" to="/">SOLRAC FLIX</Link>
      <Link className="favoritos" to="/favoritos">MEUS FILMES</Link>
    </header>
  )
}

export default Header;