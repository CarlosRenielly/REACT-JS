import './App.css';
import HelloWorld from './componets/HelloWorld';
import SayMyName from './componets/SayMyName';
import Pessoa from './componets/Pessoa';

function App() {
  const nome = "Marcio"

  return (
    <div className="App">
      <SayMyName nome="Carlos"/>
      <SayMyName nome="Marcos"/>
      <SayMyName nome = {nome}/> 
      <Pessoa nome= "Carlos" idade ="28" profissao ="programador" foto="https://via.placeholder.com/150"/>

    </div>
  );
}

export default App;
