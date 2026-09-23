import React, { useState } from 'react'

function Pila() {
    const [stack, setStack] = useState([])
    const [inputVualue, setInputValue]=useState("")

    //Agregar valores a la plia o arreglo
    const handlePush=(e)=>{
        e.preventDefault();
        if(inputVualue.trim()==="")return 
        setStack([inputVualue, ...stack]);
        setInputValue('');
    }
//ELIMINAR VALORES DE UN ARREGLO
const handlePop=()=>{
    if(stack.length===0) return
//filtrar los elementos y eliminamos el tope de pila
const nuevoStack=stack.slice(1);
setStack(nuevoStack)
}

const elementoTope=stack.length>0 ? stack[0]:'La pila esta vacia'
  return (
    <> 
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
        <h2>Visualisar los datos de la Pila</h2>
        <form>
            <input type='text' value={inputVualue} onChange={(e)=>setInputValue(e.target.value)}placeholder='Introduce datos' style={{padding: '8px', marginRight:'10px'}}></input> 
            <button type= 'submit' style={{padding: '8px 12px', background: '#4CAF50'}} >
                Push
            </button>
        </form>
    </div>
    </>
   // <div>Pila</div>
  )
}

export default Pila