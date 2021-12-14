
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './components/Navber';
import Table from './components/Table';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import  AddContact  from './components/AddContact';
import EditContacts from './components/EditContacts';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
        <Navber/>
      
      <Switch> 
      <Route exact path ='/components/Table' component={Table}/>
      <Route exact path='/components/AddContact' component={AddContact }/> 
      <Route exact path='/components/EditContacts/:id' component={EditContacts }/> 
      <Table/>
      
      </Switch>
      
    </div>
    </Router>
    </Provider>
  )
}

export default App;
