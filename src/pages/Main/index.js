import React, {useState} from 'react';
import './App.css';
  
let incremento = 0;
var dados = [];
function Main() {
    const [horas , setHoras] = useState('');
    const [views , setViews] = useState('');
    const [email , setEmail] = useState('');
    const cliqueAqui = "Clique Aqui"
    const handleChange =(e)=>{
      setHoras(e.target.value);
    }
    const handleAgeChange =(e)=>{
      setViews(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleSubmit=(e)=>{
      console.log(dados);
      incremento = incremento+1;
      var axios = require('axios');
      axios.post('https://8bb6g7po5j.execute-api.us-east-1.amazonaws.com/Teste/codificar', {
        horas: horas,
        views: views,
        email: email
      })
      .then(async function (response) {
      }).catch((error) => {
        if( error.response ){
            console.log(error.response.data); // => the response payload 
        }
      });
      setHoras('');
      setViews('');
      setEmail('');

      e.preventDefault();
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> Gerador de senha</h2>
        <label >
          Horas para visualizar:
        </label><br/>
        <input type="number" value={horas} required onChange={(e) => {handleChange(e)}} /><br/>
          {}
        <label >
          Quantidade para vizualizar:
        </label><br/>
        <input type="number" value={views} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
            { }
          <label >
         Email para o envio do acesso:
        </label><br/>
        <input type="text" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
          {}
      <br></br>
      <input  type="submit" value="Submit"/>
      </form>
      <a href="https://main.d2shxk5imahqcz.amplifyapp.com/password/">Clique aqui para ver sua senha</a>

    </header>
    </div>
  );
}
export default Main;