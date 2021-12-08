import react, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer () {
    const [product,setProduct]=useState([]);

    const dataProduct = 
        {
            id:1,
            name:'Memoria Kingston 8GB',
            price:10000,
            stock:'20',
            img:'kingstonRam8Gb.png',
            discount:20,
            description:'Memoria ram Kingston alta velocidad de 8GB',
        }
    

    const getProduct= new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(dataProduct)
        },2000)
    })

    useEffect(()=>{
        getProduct.then((data) =>{
         console.log("resp promesa",data)
         setProduct(data)
          })
    },[])


    
    return(
      <div>
        <ItemDetail data={product}/>
        </div>
    )
}