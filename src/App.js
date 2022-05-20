import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
  
function App() {
    let send_api = 0;
    const [horas , setHoras] = useState('');
    const [views , setViews] = useState('');
    const [link  , setlink]  = useState('1');
    var vizualizacao = 0;
    var time = 0;
    const handleChange =(e)=>{
      setHoras(e.target.value);
    }
    const handleAgeChange =(e)=>{
      setViews(e.target.value);
    }
    const handleSubmit=(e)=>{
      let send_api = 1;
      setlink("2");

      var vizualizacao = views;
      var time = horas;
      console.log(time);
      setHoras('');
      setViews('');
      e.preventDefault();
    }
     if(send_api == 1){
          var axios = require('axios');
    //   axios.post("",{"time" : time, "views" : vizualizacao})
     }
    
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> Gerador de senha</h2>
        <label >
          Horas para visualizar:
        </label><br/>
        <input type="text" value={horas} required onChange={(e) => {handleChange(e)}} /><br/>
          {}
        <label >
          Quantidade para vizualizar:
        </label><br/>
        <input type="text" value={views} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
            { }
               <input type="submit" value="Submit"/>
      <br></br>
      <text>Link : {link}</text>
      </form>
    </header>
    </div>
  );
}
  
export default App;