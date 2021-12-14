import react from 'react'
import  './CategoryPage.css'
import { Link } from 'react-router-dom'


export default function CategoryPage(data) {
    return(
        <>
       <h1 className='CategoryTitle'>categorias</h1>
       <div className='categoryContainer'>

       <Link to={`/Category/${1}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryCpu.png" alt="Categoria CPU" />
       </div>
        </Link>

        <Link to={`/Category/${2}`}>
        <div className='CategoryItem'>
       <img src="../../assets/CategoryHdd.png" alt="Categoria discos Rigidos" />
       </div>
       </Link>

       <Link to={`/Category/${3}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryMotherboard.png" alt="Categoria Placas Base" />
       </div>
       </Link>

       <Link to={`/Category/${4}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryRam.png" alt="Categoria Memorias Ram" />
       </div>
       </Link>

       <Link to={`/Category/${5}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategorySolidHdd.png" alt="Categoria Discos Solidos" />
       </div>
       </Link>

        
       <Link to={`/Category/${6}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryVideoCards.png" alt="Categoria Placas de Video" />
       </div>
       </Link>

       <Link to={`/Category/${7}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryPerif.png" alt="Categoria Perisfericos" />
       </div>
       </Link>

       <Link to={`/Category/${8}`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryGabinetes.png" alt="Categoria Gabinetes" />
       </div>
       </Link>

       </div>
       </>
    )


}