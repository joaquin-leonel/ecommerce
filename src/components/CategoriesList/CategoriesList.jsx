import {Link} from 'react-router-dom'

export default function CategoriesList() {
    return(
        <>
       <h1 className='CategoryTitle'>categorias</h1>
       <div className='categoryContainer'>

       <Link to={`/Category/CPU`}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryCpu.png" alt="Categoria CPU" />
       </div>
        </Link>

        <Link to={`/Category/Discos Rigidos`}>
        <div className='CategoryItem'>
       <img src="../../assets/CategoryHdd.png" alt="Categoria discos Rigidos" />
       </div>
       </Link>

       <Link to={`/Category/Placas Base `}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryMotherboard.png" alt="Categoria Placas Base" />
       </div>
       </Link>

       <Link to={`/Category/Memorias Ram `}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryRam.png" alt="Categoria Memorias Ram" />
       </div>
       </Link>

       <Link to={`/Category/Discos SSD `}>
       <div className='CategoryItem'>
       <img src="../../assets/CategorySolidHdd.png" alt="Categoria Discos Solidos" />
       </div>
       </Link>

        
       <Link to={`/Category/Placas de Video `}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryVideoCards.png" alt="Categoria Placas de Video" />
       </div>
       </Link>

       <Link to={`/Category/Perisfericos `}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryPerif.png" alt="Categoria Perisfericos" />
       </div>
       </Link>

       <Link to={`/Category/Gabinetes `}>
       <div className='CategoryItem'>
       <img src="../../assets/CategoryGabinetes.png" alt="Categoria Gabinetes" />
       </div>
       </Link>

       </div>
</>
    )


}