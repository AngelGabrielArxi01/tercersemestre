import React from 'react'
import {useEffect, useState } from "react";

function Ejmploarreglo() {// Iniciamos con un estado para el arreglo
const [elementos,setElementos]=useState([]);
//crear funcionpara agregar datos
const agregarDatos=()=>{
  const nuevoNumero=Math.floor(Math.random()*50);
  setElementos([...elementos, nuevoNumero]);
}
//Metodo para recorrer el arreglo
const recorrerArreglo =(elementos, index)=>(
  <li  
   key={index}
   style={{
    margin: "5px 0",
    fontSize: "18px"
   }} 
  > 
  Elemento #{index + 1}: <strong>{elementos}</strong></li>

)


 
  // Hook de efecto
  useEffect(()=>{
console.log("El arreglo de datos es:",elementos)
  },[elementos]);
  
   
  return ( <>
   <h1>Miprimer arreglo</h1>
  <div style={{padding:'20px'}}>
  <h2>Paso1 Agregar datos al arreglo</h2>
  <button onClick={agregarDatos}>
    agregar numero aleatorio
  </button>
  <ul>
    {/* si el arreglo esta vacio enviar un mensjae*/}
    elementos.length===0 ?(

    )
    (elementos.map(numerorandom))
  </ul>
  </div>
    </>
    //<div>Ejmploarreglo</div>
  )
}

export default Ejmploarreglo