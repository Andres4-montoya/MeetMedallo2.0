import React, { Component } from 'react'
import "./Calificacion.css"


export const Calificacion = () => {
    return (
        <div className='Calificacion'>
            <center>
            <h2 >Deja aqui tu reseña</h2>
            </center>
           <form class="form-inline">
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Elige tu sitio</option>
    <option value="1">Cerro pan de Azucar</option>
    <option value="2">Jardin Botanico</option>
    <option value="3">Casa de la Memoria</option>
    <option value="3">Parque Botero</option>
    <option value="3">Parque Explora</option>
    <option value="3">Escaleras Electricas</option>
  </select>
  <div  className="Sitio">
    <input type="text"  placeholder="Dinos que opinas sobre el lugar" style={{width:'450px', height:'35px'}}></input>
    </div>
  </form>
  
        </div>
    )
}



export default Calificacion