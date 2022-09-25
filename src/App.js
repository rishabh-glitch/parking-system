import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import BookParkingSlotComponent from './components/BookParkingSlotComponent';
import BookedParkingSlot from './components/BookedParkingSlot';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path = "/" component = {HeaderComponent}></Route> 
          <Route path = "/bookparkingslot" component = {BookParkingSlotComponent}></Route>
          <Route path = "/bookedparkingslot" component = {BookedParkingSlot}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
