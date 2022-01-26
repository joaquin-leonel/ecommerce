
import './Item.css'

import { Link } from 'react-router-dom'

export default function Item({data}) {


    return(


        <div>
            <Link to={`/item/${data.id}`} style={{ textDecoration:'none' }}>
                <h2>{data.name}</h2>
                
                 <img  className="itemImage" src={`../../assets/${data.img}`} alt="imagen del producto" />
                
            </Link>
        </div>
        
    )

}
