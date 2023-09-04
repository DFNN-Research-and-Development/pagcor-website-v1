import React, {useState} from 'react'
import { Col, Form, Card, Row, Button, Container } from "react-bootstrap"
function Login() {
    const [name, setName] = useState({
        fName: '',
        mName: '',
        lName: '',
    })
    const [otherDetails, setOtherDetails] = useState({
        birthday: '',
        number: '',
        gender: '',
    })
    const handleNameChange = (e) => {
        let { id, value } = e.target
        setName({ ...name, [id]: value })
        setOtherDetails({ ...otherDetails, [id]: value })
        
    }
    const handleSubmitChange = ()=>{
        console.log(otherDetails)
        console.log(name)
    }
  return (
    <>
    <div className='login-bg'>
        <div className='login-float-card'>
            <div className='row login-card'>
                <div className='col-5 p-5'>
                    <h1 className='login-label'>Register.</h1>
                    <p>Log in with you data that you entered during your registration</p>
                    <Form>
                        <Form.Group className="mb-3 row">
                            <div className='col-4'>
                                <Form.Control type="text" id='fName' placeholder="First Name" onChange={handleNameChange}/>
                            </div>
                            <div className='col-4'>
                            <Form.Control type="text" id='mName' placeholder="Middle Name" onChange={handleNameChange}/>
                            </div>
                            <div className='col-4'>
                            <Form.Control type="text" id='lName' placeholder="Last Name" onChange={handleNameChange}/>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 row">
                            <div className='col-4'>
                                <Form.Control type="text" placeholder="Birthday" id='birthday' onChange={handleNameChange} />
                            </div>
                            <div className='col-4'>
                            <Form.Control type="text" placeholder="Mobile Number" id='number' onChange={handleNameChange}/>
                            </div>
                            <div className='col-4'>
                            <Form.Control type="text" placeholder="Gender" id='gender' onChange={handleNameChange}/>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 row" controlId="formBasicEmail">
                            <div className='col-8'>
                                <Form.Control type="email" placeholder="Email Address (optional)" />
                            </div>
                            <div className='col-4'>
                                <Form.Control type="email" placeholder="Affiliate Code (optional)" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 row" controlId="formBasicPassword">
                            <div className='col-6 d-flex flex-column justify-content-around'>
                                <Form.Control type="text" placeholder="Username" />
                                <Form.Control type="text" placeholder="New Password" />
                                <Form.Control type="text" placeholder="Confirm Password" />
                            </div>
                            <div className='col-6'>
                                <p><strong>Credential requirements</strong></p>
                                <p>To create a new username and password, you have to meet all of the following requirements:</p>
                                <ul>
                                    <li>Username: minimum 8 - 17 characters</li>
                                    <li>Password: Must have alphanumeric characters only</li>
                                    <li>Password: Minimum 8 characters</li>
                                </ul>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I have agreed to our Terms and Condition and have read our Privacy Policy." />
                        </Form.Group>

                        <div className='row'>
                            <div className='col-6'>
                                <Button variant="primary" className='p-3 rounded-5 w-100'id="fName" onClick={handleSubmitChange}>
                                    Sign Up
                                </Button>
                            </div>
                            <div className='col-6'>
                                <Button variant="danger" type="submit" className='p-3 rounded-5 w-100'>
                                    Link Inplay Account
                                </Button>
                            </div>
                            
                        </div>
                    </Form>
                </div>
                <div className='col-7 p-0'>
                    <div className='login_image'></div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Login