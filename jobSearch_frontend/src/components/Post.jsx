import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'



function Post() {
  return (
    <>

     {/* <Header/> */}
     
      <div className='container-fluid'>
        <Row>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10}>
            <div className='border rounded p-4 my-5'>
            <div className='d-flex align-items-center justify-content-between'>
            <h5>Employer</h5>
            <a href="" style={{textDecoration:'none'}}>Click here to advertise your job<FontAwesomeIcon icon={faCircleArrowRight} /></a>
            </div>
            <h5 className='text-center text-primary'>Posted Jobs</h5>

           <div className='table-responsive'>
                <table className='table border'>
                    <thead>
                        <tr>
                            <th className='border-end'>Posted Date</th>
                            <th className='border-end'>Job Title</th>
                            <th className='border-end'>City</th>
                            <th className='border-end'>Job Type</th>
                            <th className='border-end'>Pay</th>
                            <th className='border-end'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-end'>2026-11-06</td>
                            <td className='border-end'>csa</td>
                            <td className='border-end'>Thodupuzha</td>
                            <td className='border-end'>full time</td>
                            <td className='border-end'>154575</td>
                            <td className='border-end'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <button className='btn btn-danger rounded'>Delete</button>
                                    <button className='btn btn-primary rounded'>Response</button>
    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>

           <div>
               <Row>
                <Col sm={12} md={1}></Col>
                <Col sm={12} md={10}>
                <div className='shadow border p-4 mt-5 '>
                    <div className=' text-center'>
                        <img src="/post.png" alt="post a job" width={'90px'} />
                        <h5>Post a job</h5>
                    </div>
                    <label htmlFor="" className='mt-3'>Company Name</label>
                    <input type="text" className='form-control rounded shadow'/>

                    <label htmlFor="" className='mt-3'>Job Title</label>
                    <input type="text" className='form-control rounded  shadow'/>

                    
                    <label htmlFor="" className='mt-3'>City</label>
                    <input type="text" className='form-control rounded  shadow'/>

                    
                    <label htmlFor="" className='mt-3'>Address</label>
                    <input type="text" className='form-control rounded  shadow'/>

                    
                    <label htmlFor="" className='mt-3'>Job Type</label>
                    <input type="text" className='form-control rounded  shadow'/>

                     <label htmlFor="" className='mt-3'>Pay</label>
                    <input type="text" className='form-control rounded  shadow'/>

                     <label htmlFor="" className='mt-3'>Last Date to Apply</label>
                    <input type="text" className='form-control rounded  shadow'/>

                    
                     <label htmlFor="" className='mt-3'>Posted Date</label>
                    <input type="text" className='form-control rounded  shadow'/>

                     <label htmlFor="" className='mt-3'>Description</label>
                    <textarea name="" id="" className='form-control rounded  shadow'></textarea>

                    <div className='d-flex align-items-center justify-content-center'>
                        <button className='btn btn-success mt-3 rounded px-5'>Post</button>
                    </div>


                </div>
                </Col>
                <Col sm={12} md={1}></Col>
               </Row>
           </div>
            </div>
            </Col>
            <Col sm={12} md={1}></Col>
        </Row>
        

      </div>
    </>
  )
}

export default Post