import react, { useEffect,useState } from 'react'
import Button from '@mui/material/Button';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom'

export default function Item({data}) {


    return(


        <div>
            <Link to={`/item/${data.id}`} style={{ textDecoration:'none' }}>
                <h2>{data.name}</h2>
                
                <div className="itemImage">
                <img src={`../../assets/${data.img}`} alt="imagen del producto" />
                </div>

                <div>Stock disponible: {data.stock}</div>

                <Button variant="contained" style={{
                        backgroundColor: "green",
                        color: "white",
                        marginBottom: "2rem"
                }}>Agregar a Carrito</Button>
            </Link>
        </div>
        
    )

}
