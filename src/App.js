
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './components/Navber';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navber/>
      <Table/>
      </header>
    </div>
  );
}

export default App;
