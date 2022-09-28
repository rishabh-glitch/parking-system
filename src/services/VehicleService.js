import axios from "axios"
const VEHICLE_BASE_REST_API_URL = 'http://localhost:8080/vehicles'

class VehicleService{

    saveVehicle(vehicle){
        return axios.post(VEHICLE_BASE_REST_API_URL + '/add',vehicle);
    }
}
export default new VehicleService();