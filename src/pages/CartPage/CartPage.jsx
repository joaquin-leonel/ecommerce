import React, { useContext, useState } from 'react'
import cartContext from '../../context/cartContext'
import './CartPage.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import db from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function CartPage({}) {
  const {products, totalFinal } = useContext(cartContext)
  console.log('los productos desde cartpage: ', products)

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mail: '',
  })
  const [orderId, setOrderId] = useState(null)

  function handleChange(e) {
    console.log('el input es ', e.target.name)
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const sendOrder = () => {
    console.log('products ', products)
    console.log('buyer ', formData)
    let order = {}
    order.buyer = formData
    order.items = products
    order.total = totalFinal
    console.log('envia orden ', order)
    pushOrder(order)
  }

  const pushOrder = async (order) => {
    const orderFirebase = collection(db, 'ordenes')
    const orden = await addDoc(orderFirebase, order)
    setOrderId(orden.id)
  }

  return (
    <div>
     {orderId !=null ?
     <>
     <h1 className="msgFinCompra"> 
     Su compra fue procesada con exito!
      </h1>
      <p className="msgFinCompra">El código de orden de su compra es el <strong className='orderNumber'>{orderId}</strong> se le solicitará para retirar su pedido.
     </p>
     <div className='imgContainer'>
     <img className="imgCompraExito" src="assets/buyOk.png" alt="Compra exitosa" />
     </div>
      </>
      :
    
    <>
      <h1 className="TitleFinCompra"> 
      Complete sus datos para finalizar la compra
    </h1>
      <div className="finCompraForm">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="form-container"
        >
          <TextField
            label="Nombre"
            name="nombre"
            variant="outlined"
            value={formData.nombre}
            onChange={handleChange}
          />
          <TextField
            label="Telefono"
            name="telefono"
            variant="outlined"
            value={formData.telefono}
            onChange={handleChange}
          />
          <TextField
            label="Mail"
            name="mail"
            variant="outlined"
            value={formData.mail}
            onChange={handleChange}
          />
          <h2>Retirar Mercaderia por el local.</h2>
          <p>Los productos se retiran por el domicilio comercial de <strong>Pc Center</strong>, luego de la confirmación que ya esta listo su pedido. Dreccióon Av Rivadavia 323433 Caballito Capital Federal.</p>
          
          <Button variant="outlined" onClick={sendOrder}>
            Finalizar Compra
         </Button>
        </Box>

        <div className="cartContainer">
          {products.map((product) => {
            return (
              <div className="cartItems" key={product.id}>
                <img
                  className="cartImage"
                  src={`../assets/${product.image}`}
                  alt="imagen del producto"
                />
                <p className="pCart">{product.name}</p>
                <p className="pCart">{product.quantity} Unidades</p>
                <p className="pCart"> ${product.price}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="TotalValueBox">
        <div className="TotalValue">
          <h2 className="subtotalNumber">Subtotal: ${totalFinal}</h2>
          <h2 className="totalNumber">Total: ${totalFinal}</h2>
        </div>
      </div>
      </>
        }
    </div>
   
  )
}
