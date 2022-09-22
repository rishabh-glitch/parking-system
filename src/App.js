import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path = "/" component = {HeaderComponent}></Route> 
          {/* <Route path = "/signup" component = {Register}></Route> */}
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
