import { faBriefcase, faCalendarDays, faCalendarXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'



function Applied() {
  return (
    <>
    <h2 className='text-center text-primary my-5'>Applied Jobs</h2>

    <div className='container-fluid'>
        <Row>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10}>
            <div className='shadow rounded  p-4'>
                  <div className='table-responsive'>
                <table className='table border'>
                    <thead>
                        <tr>
                            <th className='border-end'>Job Title</th>
                            <th className='border-end'>Company Name</th>
                            <th className='border-end'>Job Location</th>
                            <th className='border-end'>Job Type</th>
                            <th className='border-end'>Pay</th>
                            <th className='border-end'>Closing Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-end'>Sharepoint Developer</td>
                            <td className='border-end'>Tata Consultancy Services</td>
                            <td className='border-end'>29, Kamaraj Rd, Red Fields, Coimbatore, Tamil Nadu 641018</td>
                            <td className='border-end'>full time</td>
                            <td className='border-end'>	25000-30000</td>
                            <td className='border-end'>	2024-08-09</td>
                            
                        </tr>
                    </tbody>
                </table>
           </div>
 
            </div>
            </Col>
            <Col sm={12} md={1}></Col>
        </Row>

        <Row className='p-4'>
            <Col sm={12} md={4} lg={4}>
            <div className='border rounded shadow p-4'>
               <div className='row'>
                    <div className="col-md-4">
                        <img src="/emp.png" alt="" width={'100px'}/>
                    </div>
                    <div className="col-md-8">
                        <h5>Sharepoint Developer</h5>
                        <h6 className='mt-1'><FontAwesomeIcon icon={faBriefcase} /><span style={{fontSize:'12px'}}>Company:</span> Tata Consultancy Services</h6>
                         <h6 className='mt-1'><FontAwesomeIcon icon={faCalendarDays} /><span style={{fontSize:'12px'}}>Publish on:</span> Tata Consultancy Services</h6>
                          <h6 className='mt-1'><FontAwesomeIcon icon={faLocationDot} />29, Kamaraj Rd, Red Fields, Coimbatore, Tamil Nadu 641018</h6>
                           <h6 className='mt-1'><FontAwesomeIcon icon={faCalendarXmark} /><span style={{fontSize:'12px'}}>Closing on:</span> 2024-08-09</h6>
                        
                    </div>
               </div>

            </div>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Applied