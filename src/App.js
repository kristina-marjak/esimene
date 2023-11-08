import logo from './logo.svg';
import './App.css';
import Luule1 from './Luule1';
import Luule2 from './Luule2';

function App() {
  //alert('tere')
  const eesNimi = 'Kristina';
  const pereNimi = 'Marjak';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link">
          Tere-tere, {eesNimi} {pereNimi}
        </div>
        <Luule1/>
        ________
        <Luule2/>
      </header>
    </div>
  );
}

export default App;
