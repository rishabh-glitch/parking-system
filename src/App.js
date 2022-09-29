import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import BookParkingSlotComponent from './components/BookParkingSlotComponent';
import BookedParkingSlot from './components/BookedParkingSlot';
import CheckAvailabilityComponent from './components/CheckAvailabilityComponent';
import AddVehicleComponent from './components/AddVehicleComponent';
// import Home from './components/Home';
import SavedPremise from './components/SavedPremise';
import Login from './components/Login';
import UserHeader from './components/UserHeader';
import SignUp from './components/SignUp';
import CreatePremiseComponent from './components/CreatePremiseComponent'
import ParkedVehicle from './components/ParkedVehicle'
import CreateFloor2 from './components/CreateFloor2';
import UpdateFloorDetails from './components/UpdatedFloorDetails'
import UserHome from './components/UserHome'
import AdminHome from './components/AdminHome'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path = "/" component = {SignUp}></Route> 
        <Route path ="/userhome" component={UserHome}></Route>
        <Route path ="/adminhome" component={AdminHome}></Route>
        <Route path ="/login" component={Login}></Route>
        <Route path ="/createpremisecomponent" component={CreatePremiseComponent}></Route>
        <Route path = "/parkedvehicle" component = {ParkedVehicle}></Route>
        <Route path ="/parkingpremise" component={SavedPremise}></Route>
        <Route path ="/createfloor" component={CreateFloor2}></Route>
        <Route path ="/parkingfloor" component={UpdateFloorDetails}></Route>
        <Route path ="/home" component={HeaderComponent}></Route> 
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
