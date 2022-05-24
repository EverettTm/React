import React, {useState} from 'react';


function VerSenha(){
    const [senhaCripto , setSenhaCripto] = useState('');
    const [senha , setSenha]             = useState('');

    const handleChange =(e)=>{
      setSenhaCripto(e.target.value);
    }

    const handleSubmit=(e)=>{
      var axios = require('axios');
      axios.post('https://8bb6g7po5j.execute-api.us-east-1.amazonaws.com/Teste/pegarsenha', {
        url: senhaCripto,
      }).then((response) => {
        console.log(response.data.body);
        setSenha(response.data.body);
      }, (error) => {
        console.log(error);
      });
      e.preventDefault();

    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> Gerador de senha</h2>
        <label >
          Digite o codigo recebido
        </label><br/>
        <input type="text" value={senhaCripto} required onChange={(e) => {handleChange(e)}} /><br/>
        <label >
          Senha: {senha}
        </label>
        <br/>
        <br/>  
      <br></br>
      <input type="submit" value="Submit"/>

      </form>
    </header>
    </div>
  );
};
export default VerSenha