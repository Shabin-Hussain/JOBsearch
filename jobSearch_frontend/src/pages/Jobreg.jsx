import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'


function Jobreg() {
  return (
    <>
     <Header/>

            <h2 className='text-center text-primary my-5'>Register Careerseeker Account</h2>
            
                <Row>
                    <Col sm={12} md={3}></Col>
                    <Col sm={12} md={6}>
                    <div className='shadow rounded p-5 mb-5'>
                        

                        <label htmlFor="" className='mt-3'>Your name</label>
                        <input type="text"  className='form-control rounded' placeholder='Enter your name'/>


                        <label htmlFor="" className='mt-3'>Phone Number</label>
                        <input type="text"  className='form-control rounded' placeholder='Enter your phone number'/>

                        <label htmlFor="" className='mt-3'>Email Address</label>
                        <input type="text"  className='form-control rounded' placeholder='Enter your email address'/>

                        <label htmlFor="" className='mt-3'>Username</label>
                        <input type="text"  className='form-control rounded' placeholder='Enter username'/>

                        <label htmlFor="" className='mt-3'>Password</label>
                        <input type="text"  className='form-control rounded' placeholder='Enter password'/>

                        <div className='d-flex align-items-center justify-content-center'>
                            <button className='btn btn-primary rounded mt-5'>Register</button>
                        </div>

                    </div>
                    </Col>
                    <Col sm={12} md={3}></Col>
                </Row>
            

        </>
  )
}

export default Jobreg