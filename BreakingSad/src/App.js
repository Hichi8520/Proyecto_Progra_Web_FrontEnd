import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componente
import MiComponente from './components/MiComponente.js'

function App() {
var nombre = "Luis Roldan";
var presentacion = <h2>hola soy {nombre}</h2>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> and save to reload.
        </p>
        {presentacion}

        <section className="componentes">
        <MiComponente/>
      </section>

      </header>
      
    </div>
  );
}

export default App;
