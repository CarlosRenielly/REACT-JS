import './App.css';
import HelloWorld from './componets/HelloWorld';

function App() {
  
  const name = 'Carlos'
  const newname = name.toUpperCase()
  
  return (
    <div className="App">
      <h1>Olá Carlos</h1>
      <p>Meu primeiro App</p>
      <p>Ola, seja bem vindo, {newname}</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
