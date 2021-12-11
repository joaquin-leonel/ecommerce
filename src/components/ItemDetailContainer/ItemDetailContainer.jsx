import react, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';


export default function ItemDetailContainer () {
    const [product,setProduct]=useState([]);

    console.log("useparams:", useParams())
    const {id} =useParams()

    const dataProducts = [
        {
            id:1,
            name:'Memoria Kingston 8GB',
            price:10000,
            stock:'20',
            img:'kingstonRam8Gb.png',
            discount:20,
            description:'Memoria ram Kingston alta velocidad de 8GB',
        },

        {
            id:2,
            name:'motherboard asrok A530 MHVS',
            price:12000,
            stock:6,
            img:'asrokA520MHVS.png',
            description:'placa base asrock a530 compatible con procesadores AMD',
        },

        {
            id:3,
            name:'disco rigido Seagate 1tb',
            price:9000,
            stock:12,
            img:'discoRigidoSeagate.png',
            description:'Disco rigido marca Seagate de 1TB 7200RPM 64MB Cache',
        }
    
    ]



    const getProduct= new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(dataProducts)
        },2000)
    })

    useEffect(()=>{
        getProduct.then((resultsProducts) =>{
             resultsProducts.filter(resultProduct => {
                if(resultProduct.id === parseInt(id)){
                    setProduct(resultProduct)
                    // console.log("el result product es ",resultProduct.price)
                }
            
        })

        
        })
    },[])


    
    return(
      <div>
        <ItemDetail data={product}/>
        </div>
    )
}