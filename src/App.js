import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function App(){
    const [empresa, setEmpresa] = useState('');
    const [dados, setDados] = useState('');

    async function obterDados(){
        
        let url = `https://viacep.com.br/ws/${empresa}/json/`;


        var myInit = { method: 'GET' }

        fetch(url,myInit)
        .then(response => response.json())
        .then(data => {
          const uri = data.logradouro
          console.log(data)
          uri && setDados(data)
        });



    }


    return(
        
        <div className = "principal">
            <div className = "secundaria">
                <h1>Obter Informações de Endereço</h1>

                <input name='CEP' placeholder='Digite o seu CEP' onKeyUp={e => setEmpresa(e.target.value)}/>

                <button type='button' onClick={obterDados}>
                    Obter Dados
                </button>
            </div>


  



            <p>
                {dados.logradouro}
            </p>
            <p>
                {dados.bairro}
            </p>
            <p>
                {dados.localidade}
            </p>
            <p>
                {dados.uf}
            </p>
        </div>
          );

}

export default App;