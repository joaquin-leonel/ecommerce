import react from "react";
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

export default function NavBar() {
    return(
     <AppBar position="static"> 
        <nav>
          <div className="logo-box">
              <img src={process.env.PUBLIC_URL + "assets/logo.svg"}/>
              </div>
              <ul> 
                  <li><Button variant="contained">Inicio </Button></li>
                  <li><Button variant="contained">Productos </Button></li>
                  <li><Button variant="contained">Quienes somos </Button></li>
                  <li><Button variant="contained">Contacto </Button></li>
              </ul>
            </nav>
    </AppBar>
    )
}