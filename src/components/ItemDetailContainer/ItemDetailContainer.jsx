import {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';
import CircularProgress  from "@mui/material/CircularProgress";
import {doc, getDoc} from 'firebase/firestore'
import db from '../../firebase'

export default function ItemDetailContainer () {
    const [loader,setLoader]=useState(true);
    const [product,setProduct]=useState([]);

    console.log("useparams:", useParams())
    const {id} =useParams()

    // const dataProducts = [
    //     {
    //         id:1,
    //         name:'Memoria Kingston 8GB',
    //         price:10000,
    //         stock:'20',
    //         img:'kingstonRam8Gb.png',
    //         discount:20,
    //         description:'Memoria ram Kingston alta velocidad de 8GB',
    //     },

    //     {
    //         id:2,
    //         name:'motherboard asrok A530 MHVS',
    //         price:12000,
    //         stock:6,
    //         img:'asrokA520MHVS.png',
    //         discount:20,
    //         description:'placa base asrock a530 compatible con procesadores AMD',
    //     },

    //     {
    //         id:3,
    //         name:'disco rigido Seagate 1tb',
    //         price:9000,
    //         stock:12,
    //         img:'discoRigidoSeagate.png',
    //         discount:20,
    //         description:'Disco rigido marca Seagate de 1TB 7200RPM 64MB Cache',
    //         category:2,
    //     },

    //     {
    //         id:4,
    //         name:'Placa de video Gforce Gtx Series ',
    //         price:200000,
    //         stock:12,
    //         img:'gforceGtxSeries.png',
    //         discount:20,
    //         description:'Placa de video Gforce gtx1050 con 768 nucleos',
    //         category:6,
    //     },

    //     {
    //         id:5,
    //         name:'SSD Kingston  250GB ',
    //         price:10000,
    //         stock:50,
    //         img:'SSDkingston.png',
    //         discount:20,
    //         description:'Disco solido marca kingston de 250 GB de capacidad',
    //         category:5,
    //     },

    //     {
    //         id:6,
    //         name:'Pendrive Kingston 32GB ',
    //         price:1000,
    //         stock:300,
    //         img:'kingstonPendrive32gb.png',
    //         discount:20,
    //         description:'Pendrive Kingston 32GB USB 3.0 alta velocidad',
    //         category:7,
    //     },
    //     {
    //         id:7,
    //         name:'Procesador intel I9 700K ',
    //         price:75000,
    //         stock:10,
    //         img:'intelI9700K.png',
    //         discount:20,
    //         description:'Procesador Intel i9 ultima generacion',
    //         category:1,
    //     },

    //     {
    //         id:8,
    //         name:'Gabinete ThermalTake V200',
    //         price:10000,
    //         stock:50,
    //         img:'thermaltakeV200.png',
    //         discount:20,
    //         description:'Case Thermaltake V200 (no Incluye fuente)',
    //         category:7,
    //     },
     
    // ]

async function getProduct(db){
    const docRef = doc (db,"productos",id)
    const docSnap =await getDoc(docRef);

    if (docSnap.exists()) {
       
        console.log("doc data", docSnap.data())
        let producto=docSnap.data()
        producto.id=docSnap.id
        setProduct(producto)
        setLoader(false)

    }else{
        console.log("no hay nada")
    }
}

    // const getProduct= new Promise((resolve,reject) =>{
    //     setTimeout(() => {
    //         resolve(dataProducts)
    //     },2000)
    // })

    useEffect(()=>{
        // getProduct(db).then((resultsProducts) =>{
        //      resultsProducts.filter(resultProduct => {
        //         if(resultProduct.id === parseInt(id)){
        //             setProduct(resultProduct)
        //             setLoader(false)
        //             // console.log("el result product es ",resultProduct.price)
        //         }
            
        // })
         //  })
         
      getProduct(db)
     
    },[id])


    
    return(
        loader ? <CircularProgress /> :
      <div>
        <ItemDetail data={product}/>
        </div>
    )
}