import './App.css';
import OutraLista from './componets/OutraLista.js';



function App() {
  
const meusItens = ['React', 'Vue']


  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens = {meusItens}/>
    </div>
  );
}

export default App;
