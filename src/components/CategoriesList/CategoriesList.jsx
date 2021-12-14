import React, {useEffect,useState} from "react";

import Item from '../Item/Item';

import  Container  from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import CircularProgress  from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";



const CategoriesList =() => {

const {category} = useParams();
console.log("cat",{category})

const [loader,setLoader]=useState(true);
const [products,setProducts]=useState([]);

    const dataProducts = [
        {
            id:1,
            name:'Memoria Kingston 8GB',
            price:10000,
            stock:'20',
            img:'kingstonRam8Gb.png',
            description:'Memoria ram Kingston alta velocidad de 8GB',
            category:4,
        },

        {
            id:2,
            name:'motherboard asrok A530 MHVS',
            price:12000,
            stock:6,
            img:'asrokA520MHVS.png',
            description:'placa base asrock a530 compatible con procesadores AMD',
            category:3,
        },

        {
            id:3,
            name:'disco rigido Seagate 1tb',
            price:9000,
            stock:12,
            img:'discoRigidoSeagate.png',
            description:'Disco rigido marca Seagate de 1TB 7200RPM 64MB Cache',
            category:2,
        },

        {
            id:4,
            name:'Placa de video Gforce Gtx Series ',
            price:200000,
            stock:12,
            img:'gforceGtxSeries.png',
            description:'Placa de video Gforce gtx1050 con 768 nucleos',
            category:6,
        },

        {
            id:5,
            name:'SSD Kingston  250GB ',
            price:10000,
            stock:50,
            img:'SSDkingston.png',
            description:'Disco solido marca kingston de 250 GB de capacidad',
            category:5,
        },

        {
            id:6,
            name:'Pendrive Kingston 32GB ',
            price:1000,
            stock:300,
            img:'kingstonPendrive32gb.png',
            description:'Pendrive Kingston 32GB USB 3.0 alta velocidad',
            category:7,
        },

        {
            id:7,
            name:'Procesador intel I9 700K ',
            price:75000,
            stock:20,
            img:'intelI9700K.png',
            discount:20,
            description:'Procesador Intel i9 ultima generacion',
            category:1,
        },

        {
            id:8,
            name:'Gabinete ThermalTake V200',
            price:10000,
            stock:50,
            img:'thermaltakeV200.png',
            discount:20,
            description:'Case Thermaltake V200 (no Incluye fuente)',
            category:7,
        },
    ]

    const getProducts= new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(dataProducts)
        },2000)
    })

    // useEffect(()=>{
    //     getProducts.then((data) =>{
    //      console.log("respuesta",data)
    //      setProducts(data)
    //      setLoader(false)
    //      })
    // },[]

    const getProduct= new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(dataProducts)
        },2000)
    })

    useEffect(()=>{
        getProduct.then((resultsProducts) =>{
             resultsProducts.filter(resultProduct => {
                if(resultProduct.category === parseInt(category)){
                    products.push(resultProduct);
                   setLoader(false)
                 
                }
            
        })

        
        })
    },[])


    return(
        <>
        
         <h2 className="tituloProductos">Productos</h2>
         
         {console.log ('productos: ', products)}

        <Container className="itemCardContainer">

            {
                loader ? <CircularProgress /> :

                <Grid container spacing={2}>
                {
                
                    products.map((product) =>{
                        return( 
                            
                        <Grid item xs={3} key={product.id}>
                            
                            <Item data={product}/>
                            
                        </Grid>
            
                        )
                    })
                }
        </Grid> 
            }
   
        </Container>

    </>
 
    )

}
export default CategoriesList