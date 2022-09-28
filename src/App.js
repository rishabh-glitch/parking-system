import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import BookParkingSlotComponent from './components/BookParkingSlotComponent';
import BookedParkingSlot from './components/BookedParkingSlot';
import CheckAvailabilityComponent from './components/CheckAvailabilityComponent';
import AddVehicleComponent from './components/AddVehicleComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path = "/" component = {HeaderComponent}></Route> 
          <Route path = "/bookparkingslot" component = {BookParkingSlotComponent}></Route>
          <Route path = "/bookedparkingslot" component = {BookedParkingSlot}></Route>
          <Route path = "/checkavailability" component = {CheckAvailabilityComponent}></Route>
          <Route path = "/createvehicle" component = {AddVehicleComponent}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
