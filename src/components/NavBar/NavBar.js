import react from "react";
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
          <Link to="/"> <img src={process.env.PUBLIC_URL + "assets/logo.svg"}/> </Link>
              </div>
              <ul> 
                  <li>
                      <Link to="/">
                            <Button variant="contained">Inicio </Button>
                      </Link>
                    </li>
                  
                  <li>
                  <Link to="/category">
                          <Button variant="contained">Productos </Button>
                          </Link>  
                    </li>

                  <li>
                     <Link to="/about">
                         <Button variant="contained">Nosotros </Button>
                        </Link>
                    </li>

                  <li>
                     <Link to="/contact">
                          <Button variant="contained">Contacto </Button>
                          </Link>
                    </li>
              </ul>
              <CardWidget />
            </nav>
    </AppBar>
    )
}