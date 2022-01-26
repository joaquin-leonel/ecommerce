import React, {useState, useEffect} from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'
import Slider from '../../components/Slider/Slider'


export default function HomePage() {

    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
     const handleSize = () =>{
         setSize(window.innerWidth);
     }
     window.addEventListener("resize", handleSize)
     },[])

    return(
        <>
        <Slider size={size} />
        <ItemListContainer/>
        </>
    )


}