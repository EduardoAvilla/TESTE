import React from 'react'
import Img from '../img/Image.png'
import '../stilo.css'
 import axios from 'axios'

const PegaValores = ()=>{

    var _origem = document.querySelector("#origem").value;
    var _destino = document.querySelector("#destino").value;
    var _tempo = document.querySelector("#tempo").value;
    var Valores = {
        origem : _origem, destino: _destino, tempo:_tempo

    };
    var Valoresjson = JSON.stringify(Valores);
    localStorage.setItem('Valores', Valoresjson);
  
    fetch('./api.json')
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
      })
}
 
    
const Index = () =>{''

    return(
        <main>

 
<div id="page">

<div id="l1"><h4 id="title">VxTel</h4>	
<form  className='formulario'>
    <p id="label">Origem</p>
    <input id="origem" className="form-control form-control-lg" type="text"   aria-label=".form-control-lg example"/>
    <p id="label">Destino</p>
    <input id="destino" className="form-control form-control-lg" type="text"   aria-label=".form-control-lg example"/>
    <p id="label">Tempo (minutos)</p>
    <input id="tempo" className="form-control form-control-lg" type="text"   aria-label=".form-control-lg example"/>
    <button  onClick={PegaValores } type="button" className="btn btn-primary">Calcular</button>
    <br></br>
    <br></br>
    <button  type="button" className="btn btn-primary">MANDAR DADOS</button>

</form>

</div>


<div id="l2">

    <img src={Img}/>

</div>



</div>






<div id="resultado" className="d-flex justify-content-center">
<div id="l3"><h5 id="title2">Valores para cada plano</h5>	
<br/> <br/>     

<form id="form" className=" flex-wrap"> 
     
<section id= "Plano1">
<p className='badge bg-primary text-wrap'>Sem plano</p>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" disabled/>
  <span class="input-group-text">.00</span>
</div></section>


<section id= "Plano30">
<p className='badge bg-primary text-wrap'>Plano 30</p>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" disabled/>
  <span class="input-group-text">.00</span>
</div>
</section>
<section id= "Plano60">
<p className='badge bg-primary text-wrap'>Plano 60</p>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" disabled/>
  <span class="input-group-text">.00</span>
</div>
</section>
<section id= "Plano120">
<p className='badge bg-primary text-wrap'>Plano 120</p>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" disabled/>
  <span class="input-group-text">.00</span>
</div>
</section>
 </form>

</div>






</div>








</main>
    );



}
export default Index;
