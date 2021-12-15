
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardWidget from '../CardWidget/CartWidget';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return(
     <AppBar position="static"> 
        <nav>
          <div className="logo-box">
          <Link to="/"> <img src={process.env.PUBLIC_URL + "assets/logo.svg"} alt='web logo'/> </Link>
              </div>
              <ul> 
                  <li>
                      <Link to="/"  style={{textDecoration:'none' }}>
                            <Button variant="contained">Inicio </Button>
                      </Link>
                    </li>
                  
                  <li>
                  <Link to="/category"  style={{textDecoration:'none' }}>
                          <Button variant="contained">Productos </Button>
                          </Link>  
                    </li>

                  <li>
                     <Link to="/about"  style={{textDecoration:'none' }}>
                         <Button variant="contained">Nosotros </Button>
                        </Link>
                    </li>

                  <li>
                     <Link to="/contact"  style={{textDecoration:'none' }}>
                          <Button variant="contained">Contacto </Button>
                          </Link>
                    </li>
              </ul>
              <CardWidget />
            </nav>
    </AppBar>
    )
}