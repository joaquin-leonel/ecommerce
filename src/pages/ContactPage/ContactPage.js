import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


export default function ContactPage() {
    return(
        <>
        
       <h1>Contactenos</h1>
        
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
            // value={formData.nombre}
            // onChange={handleChange}
          />
          <TextField
            label="Telefono"
            name="telefono"
            variant="outlined"
            // value={formData.telefono}
            // onChange={handleChange}
          />
          <TextField
            label="Mail"
            name="mail"
            variant="outlined"
            // value={formData.mail}
            // onChange={handleChange}
          />
          
          <Button variant="outlined">
           Enviar
         </Button>
        </Box>
      </div>
        </>

    )


}