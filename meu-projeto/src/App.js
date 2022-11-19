import './App.css';
import HelloWorld from './componets/HelloWorld';
import SayMyName from './componets/SayMyName';
import Pessoa from './componets/Pessoa';
import Frase from './componets/Frase';
import List from './componets/List';


function App() {
  const nome = "Marcio"

  return (
    <div className="App">
      <SayMyName nome="Carlos"/>
      <SayMyName nome="Marcos"/>
      <SayMyName nome = {nome}/> 
      <Pessoa nome= "Carlos" idade ="28" profissao ="programador" foto="https://via.placeholder.com/150"/>
      <Frase/>
      <List/>
      
    </div>
  );
}

export default App;
