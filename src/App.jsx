import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);


  if (!address) {
    return (
      <div className="landing">
        <h1>Bienvenido!</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Conecte su wallet por favor :D
        </button>
        <h2>En caso de no tenerla instalada, descarguela aqui: </h2>

        <a href="https://metamask.io/download/">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"/>
        </a>
    
      </div>
    );
  }


  return (
    <div className="landing">
      <h1>Lo logró! Bienvenido de nuevo :DD</h1>
      <br />
      <h2>Por cierto.....</h2>
      <h2>Estamos en construcción!</h2>
      <h2>Dentro de muy poco, podrá ver aqui un poco mas sobre mi y demás</h2>
      <h2>:D</h2>

      
    </div>
    
    
    
    );
}

 

export default App;