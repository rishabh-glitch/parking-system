import React, { useState} from 'react'
import UserServices from '../services/UserServices';
import { useHistory, Link, useParams } from 'react-router-dom';

// import InsuranceService from '../services/InsuranceService'
// import Header from './HeaderComponent';

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const saveUser = (e) => {
        e.preventDefault();

        const user = { firstName,lastName, email,mobile, password}

        UserServices.createUser(user).then((response) => {

            console.log(response.data)

            history.push('/login');
            alert("Registered successfully please login")
        }).catch(error => {
            console.log(error)
        })
    }

    // useEffect(() => {

    //         InsuranceService.getInsuranceById(id).then((response) =>{
    //         setName(response.data.name)
    //         setEmail(response.data.email)
    //         setPass(response.data.pass)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    const title = () => {


        return <h2 className="text-center">SignUp</h2>

    }
    // const success = () => {
    //     // return alert("registered successfully please login")
    // }

    return (
        <div style={{ backgroundColor: "#d4d3eb", height: "800px"}}>
            <br /><br />
            <div className="container" >
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{
                        backgroundColor: 'gray'
                    }}>
                        {
                            title()
                        }
                        <div className="card-body" style={{
                            backgroundColor: 'gray'
                        }}>
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter First name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Last name"
                                        name="firstName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        name="lastName"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Mobile </label>
                                    <input
                                        type="text"
                                        placeholder="Enter mobile number"
                                        name="lastName"
                                        className="form-control"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Password :</label>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        name="emailId"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveUser(e)}>Add </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/login" className="btn btn-primary"> Login </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp
