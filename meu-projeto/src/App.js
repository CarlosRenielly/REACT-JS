import './App.css';
import Evento from './componets/Eventos';
import Form from './componets/Form';


function App() {
  
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form/>

    </div>
  );
}

export default App;
