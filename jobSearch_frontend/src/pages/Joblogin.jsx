import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'


function Joblogin() {
  return (
   <>
    <Header/>
    <h2 className='text-center text-primary mt-5'>Careerseeker Login</h2>
    <div className='container-fluid'>
        <Row>
            <Col sm={12} md={3}></Col>
            <Col  sm={12} md={6}>
               <div className='shadow rounded p-5 my-5'>
                    <div className='d-flex align-items-center justify-content-center'>
                       <img src="/emp.png" alt="employer image" width={'100px'}/>
                    </div>

                    <input type="text" className='form-control mt-5 rounded' placeholder='Username'/>
                    <input type="password" className='form-control mt-3 rounded'  placeholder='Password'/>

                   <div className='d-flex align-items-center justify-content-center'>
                     <button className='btn btn-primary rounded mt-4 px-5'>Login</button>
                   </div>
               </div>
            
            </Col>
            <Col sm={12} md={3}></Col>
        </Row>
    </div>
    </>
  )
}

export default Joblogin