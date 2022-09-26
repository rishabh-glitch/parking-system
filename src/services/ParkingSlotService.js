import axios from "axios"
const PARKING_SLOT_BASE_REST_API_URL = 'http://localhost:8080'

class ParkingSlotService{

    getAllParkingSlots(){
        return axios.get(PARKING_SLOT_BASE_REST_API_URL + '/getAllSlots');
    }
    saveParkingSlot(parkingslot){
        return axios.post(PARKING_SLOT_BASE_REST_API_URL + '/saveSlot',parkingslot);
    }
    deleteParkingSlot(parkingSlotId){
        return axios.delete(PARKING_SLOT_BASE_REST_API_URL+'/deleteSlot/'+parkingSlotId);
    }
}
export default new ParkingSlotService();