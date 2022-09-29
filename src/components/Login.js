import React, {useState} from 'react'
import { useHistory} from 'react-router-dom';
import UserServices from '../services/UserServices';
// import InsuranceService from '../services/InsuranceService';
import { ToastContainer,toast } from 'react-toastify';

const Login = () => {

    
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const history = useHistory();
    

    const saveOrUpdateUser= (e) => {
        e.preventDefault();

        const user = {email,password}
            UserServices.loginUser(user).then((response) =>{
                if(response.data==="logged in")
                {
                    loginButton();
                    history.push('/userhome');

                    // alert("logged in successfully");
                }
                else if(response.data=="logged in as a admin")
                {
                    history.push('/home');
                }
                else{
                    history.push('/login');
                    alert("incorrect credentials");
                }
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        
        
    }
    const loginButton=()=>{
        toast.success("Login Successful");
    };
 

    const title = () => {

       
            return <h2 className = "text-center">Login Here </h2>
        
    }
    // const success=()=>{
    //     // return alert("successfull login")
    // }

    return (
        <div>
        <ToastContainer/>
        <div style={{ backgroundColor: "#d4d3eb", height: "800px"}}>
            <h1 style={{fontFamily:"revert",textAlign:"center",color:"darkblue",textShadow:"4px 4px 2px azure",paddingTop:"50px"}}>Parking Slot Management System</h1>
           <br /><br />
           <div className = "container"style={{paddingTop:"20px"}}>
                <div className = "row" >
                    <div className = "card col-md-6 offset-md-3 offset-md-3"style={{
            backgroundColor: 'gray'
          }}>
                       {
                           title()
                       }
                        <div className = "card-body"style={{
            backgroundColor: 'gray'
          }}>
                            <form>
                               

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                    <input
                                        type = "password"
                                        placeholder = "Enter password"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {password}
                                        onChange = {(e) => setPass(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateUser(e)}>Submit </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </form>
                        </div>
                    </div>
                </div>

           </div>

        </div>
        </div>
    )
}

export default Login
