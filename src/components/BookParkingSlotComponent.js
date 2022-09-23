import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import HeaderComponent from './HeaderComponent'

const BookParkingSlotComponent = () => {
  return (<div>
    <HeaderComponent/>
    <div style={{background:"url(https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)center",
  boxShadow : "0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)",opacity:"0.9"}}>
            <div className='container' style={{width:"500px",color : "aliceblue",height:"569px"}}>
              <h2 style={{    textAlign: 'center'}}>Enter Details</h2>
                <div className='row' style={{    color: "floralwhite",fontFamily:"monospace"}}>
                    {/* <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: "10px", backgroundColor: "gray" }}>
                        {
                            title()
                        } */}
                        <div className='card-body' style={{background:"black",padding:"23px",color:"white",borderRadius:"40px"}}>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Parking Floor</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Parking Floor'
                                        name='vehicleType'
                                        className='form-control'
                                        // value={clientId}
                                        // onChange={(i) => setClientId(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Vehicle</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Vehicle Number'
                                        name='code'
                                        className='form-control'
                                        // value={code}
                                        // onChange={(i) => setCode(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Parking Date</label>
                                    <input
                                        type="date"
                                        placeholder='Enter Parking Date'
                                        name='vehicleCompany'
                                        className='form-control'
                                        // value={registrationNo}
                                        // onChange={(i) => setRegistrationNo(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Parking Time</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Parking Time'
                                        name='vehicleModel'
                                        className='form-control'
                                        // value={chassisNo}
                                        // onChange={(i) => setChassisNo(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Parking Duration</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Parking Duration'
                                        name='vehicleModel'
                                        className='form-control'
                                        // value={vehicleModel}
                                        // onChange={(i) => setVehicleModel(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Parking Slot No</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Parking Slot No'
                                        name='vehicleModel'
                                        className='form-control'
                                        // value={vehicleModel}
                                        // onChange={(i) => setVehicleModel(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <h3>ENTER PAYMENT DETAILS</h3>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Payment Type</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Payment Type'
                                        name='vehicleModel'
                                        className='form-control'
                                        // value={vehicleModel}
                                        // onChange={(i) => setVehicleModel(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className='btn btn-primary' 
                                // onClick={(i) => saveOrUpdateInsurance(i)}
                                >Submit</button>
                                {/* <Link to="/listInsuranceComponent" className='btn btn-outline-danger' style={{ marginLeft: "10px", textDecoration: "none" }}> Cancel </Link> */}
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default BookParkingSlotComponent