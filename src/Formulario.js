import React from 'react'
import { useForm } from 'react-hook-form';
import  './style.css'
import ImagemLogin from './ImagemLogin.jpg'
  function Formulario (){
 
 
    const {register, handleSubmit} = useForm();

    const onSubmit = (dados) => {
 console.log(dados)
    }
  


return(

 <div id="TelaLogin" className='d-flex  align-items-center'>


<section id="TelaLeft">
     
    
<form onSubmit={handleSubmit(onSubmit)}>
    
<h1 className='TxtLogin'>Cadastrar</h1>
  <div className="form-row align-items-center">
    <div className="col-auto">
      <label className="sr-only"  >Email</label>
      <input type="text"  {...register("email")} className="form-control mb-2" name="email"  id="email" placeholder="exemplo@outlook.com"/>
    </div>
    <div className="col-auto">
      <label className="sr-only">Usuário</label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">*</div>
        </div>
        <input type="password"  {...register("senha")} name="senha" className="form-control" id="senha"/>
      </div>
    </div>
    <div className="col-auto d-flex justify-content-center">
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
        <label className="form-check-label">
          Lembrar-me
        </label>
      </div>
    </div>
    <div className="Sigin">
      <button type="submit"  className="btn btn-primary mb-2">Cadastrar</button>
    </div>
  </div>
</form>
      </section>

<section id="TelaRight">    

<img src={ImagemLogin} width="100%" height="60%"/>
   </section>


 </div>

);
}

 export default Formulario;